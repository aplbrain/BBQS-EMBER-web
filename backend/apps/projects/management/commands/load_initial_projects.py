import io
import zipfile
from pathlib import Path
from pprint import pprint

import requests
import yaml
from django.core.management.base import BaseCommand, CommandError
from django.db import transaction

from apps.projects.models import Contributor, EmberProject, Funding, Publication

GITHUB_REPO = "https://github.com/aplbrain/BBQS-EMBER-Data-Model"
GITHUB_REF = "heads/34-ember-project-initial-data-updates"
GITHUB_ZIP_URL = f"{GITHUB_REPO}/archive/refs/{GITHUB_REF}.zip"
DATA_FILES_DIR = "EMBER_Metadata/data"

PROJECT_SCALAR_FIELDS = {
    field.name for field in EmberProject._meta.fields if not field.name == "id" and not field.is_relation
}

CONTRIBUTOR_SCALAR_FIELDS = {
    field.name for field in Contributor._meta.fields if not field.name == "id" and not field.is_relation
}

PUBLICATION_SCALAR_FIELDS = {
    field.name for field in Publication._meta.fields if not field.name == "id" and not field.is_relation 
}

FUNDING_SCALAR_FIELDS = {
    field.name for field in Funding._meta.fields if not field.name == "id" and not field.is_relation
}


class Command(BaseCommand):
    help = "Load initial EMBER Projects YAML files"

    def add_arguments(self, parser):
        parser.add_argument("path", nargs="?", help=f"Local path to directory containing YAML files. If omitted, default behavior pulls YAML files from {GITHUB_ZIP_URL}")
        parser.add_argument("--dryrun", action="store_true", help="Do not write to DB")
        
        return super().add_arguments(parser)

    def handle(self, *args, **options):
        # Get arguments
        path = options['path']
        dryrun = options['dryrun']

        if path:
            files = Path(path).glob("*.yaml")
        else:
            zip_bytes = requests.get(GITHUB_ZIP_URL).content
            zip_file = zipfile.ZipFile(io.BytesIO(zip_bytes))

            files = [
                yaml.safe_load(zip_file.open(name))
                for name in zip_file.namelist()
                if name.endswith(".yaml") and DATA_FILES_DIR in name
            ]

        with transaction.atomic():
            for file in files:
                if isinstance(file, Path):
                    data = yaml.safe_load(file)
                else:
                    data = file

                project_id = data.get("project_id")
                print(f"Loading Project {project_id}")

                project_data = {
                    field: data.get(field)
                    for field in PROJECT_SCALAR_FIELDS
                    if field in data
                }

                # Handle Foreign Key fields - data_administrator (Contributor)
                field_data_admin = "data_administrator"
                data_admin_raw_data = data.get(field_data_admin)
                if not data_admin_raw_data:
                    raise CommandError(f"EMBER Project {project_id} is missing required FK: {field_data_admin}")

                name = data_admin_raw_data.get("name")
                data_admin_data = {
                    field: data_admin_raw_data.get(field)
                    for field in CONTRIBUTOR_SCALAR_FIELDS
                    if field in data_admin_raw_data
                }

                data_admin, _ = Contributor.objects.update_or_create(
                    name=name,
                    defaults=data_admin_data
                )

                project, _ = EmberProject.objects.update_or_create(
                    project_id=project_id,
                    defaults={
                        "data_administrator": data_admin,
                        **project_data
                    },
                )

                # Handle Many-to-Many fields - related_publications (Publication), funding (Funding)
                field_related_pubs = "related_publications"
                field_funding = "funding"

                related_pubs_raw_data = data.get(field_related_pubs, [])
                related_pubs = []
                if related_pubs_raw_data:
                    for pub in related_pubs_raw_data:
                        publication_doi = pub.get("publication_doi", "")
                        related_pub_data = {
                            field: pub.get(field)
                            for field in PUBLICATION_SCALAR_FIELDS
                            if field in pub
                        }

                        related_pub, _ = Publication.objects.update_or_create(
                            publication_doi=publication_doi,
                            defaults=related_pub_data
                        )

                        # Handle Many-to-Many fields within Publication - authors (Contributor)
                        field_authors = "authors"
                        authors_raw_data = pub.get(field_authors, [])
                        authors = []
                        if authors_raw_data:
                            for author_raw in authors_raw_data:
                                author_name = author_raw.get("name")
                                author_data = {
                                    field: author_raw.get(field)
                                    for field in CONTRIBUTOR_SCALAR_FIELDS
                                    if field in author_raw
                                }

                                author, _ = Contributor.objects.update_or_create(
                                    name=author_name,
                                    defaults=author_data
                                )

                                authors.append(author)

                            getattr(related_pub, field_authors).set(authors)
                
                        related_pubs.append(related_pub)

                    getattr(project, field_related_pubs).set(related_pubs)

                funding_raw_data = data.get(field_funding, [])
                funding_list = []
                if funding_raw_data:
                    for funding_raw in funding_raw_data:
                        award_number = funding_raw.get("award_number", "")
                        funding_data = {
                            field: funding_raw.get(field)
                            for field in FUNDING_SCALAR_FIELDS
                            if field in funding_raw
                        }

                        funding, _ = Funding.objects.update_or_create(
                            award_number=award_number,
                            defaults=funding_data
                        )
                
                        funding_list.append(funding)

                    getattr(project, field_funding).set(funding_list)

            if dryrun:
                transaction.set_rollback(True)

        print("Successfully loaded all projects!")
        return 0