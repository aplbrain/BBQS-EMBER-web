from django.db import models

from apps.projects.validators import year_validator


class Funding(models.Model):
    """
    Funding source metadata.

    v1.0.0 - https://github.com/aplbrain/BBQS-EMBER-Data-Model/releases/tag/v1.0.0
    """

    id = models.BigAutoField(primary_key=True)
    start_year = models.IntegerField(
        blank=True, help_text="Start year of the funding award", validators=[year_validator]
    )
    end_year = models.IntegerField(
        blank=True,
        null=True,
        help_text="End year of the funding award",
        validators=[year_validator],
    )
    funding_institute = models.CharField(
        help_text="Name of the funding institute (e.g., NIH, NSF, DARPA)"
    )
    award_number = models.CharField(help_text="Funding award or grant number")
    award_title = models.CharField(blank=True, help_text="Title of the funded award")
    funding_url = models.URLField(
        blank=True, help_text="URL to the funding announcement or award page"
    )
