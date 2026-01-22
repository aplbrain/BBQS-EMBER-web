from django.db import models

from apps.projects.validators import orcid_validator


class Contributor(models.Model):
    """
    Person or Organization metadata.

    v1.0.0 - https://github.com/aplbrain/BBQS-EMBER-Data-Model/releases/tag/v1.0.0
    """

    id = models.BigAutoField(primary_key=True)
    orcid = models.CharField(
        blank=True, help_text="ORCID identifier for the contributor", validators=[orcid_validator]
    )
    external_identifiers = models.JSONField(
        blank=True, default=dict, help_text="External identifiers"
    )
    name = models.CharField(help_text="Full name of the contributor")
    email = models.EmailField(blank=True, help_text="Contact email address")
    institution = models.CharField(blank=True, help_text="Institutional affiliation")


class PublicationContributor(models.Model):
    """
    Person or organization contributing to a project.
    """

    publication = models.ForeignKey("Publication", on_delete=models.CASCADE)
    contributor = models.ForeignKey(Contributor, on_delete=models.CASCADE)
    # TODO (Future): Add role ?
    # role = models.CharField(max_length=100, blank=True, help_text="Role of the contributor in this project")
