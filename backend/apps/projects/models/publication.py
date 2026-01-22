from django.db import models

from apps.projects.validators import doi_validator, year_validator


class Publication(models.Model):
    """
    Publication metadata.

    v1.0.0 - https://github.com/aplbrain/BBQS-EMBER-Data-Model/releases/tag/v1.0.0
    """

    id = models.BigAutoField(primary_key=True)
    publication_doi = models.CharField(
        blank=True, help_text="DOI for the publication", validators=[doi_validator]
    )
    title = models.CharField(help_text="Title of the publication")
    authors = models.ManyToManyField(
        "Contributor",
        through="PublicationContributor",
        blank=True,
        help_text="Authors of the publication",
    )
    journal = models.CharField(
        blank=True, help_text="Journal or venue where the work was published"
    )
    year = models.IntegerField(
        blank=True, help_text="Year of publication", validators=[year_validator]
    )
    publication_url = models.URLField(
        blank=True, help_text="URL to the publication landing page or preprint"
    )
