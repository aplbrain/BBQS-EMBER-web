from django.db import models


class Funding(models.Model):
    """
    Funding source metadata.
    """

    funding_institute = models.CharField(help_text="Name of the funding institute (e.g., NIH, NSF, DARPA)")
    award_number = models.CharField(help_text="Funding award or grant number")
    award_title = models.CharField(blank=True, help_text="Title of the funded award")
    funding_url = models.URLField(blank=True, help_text="URL to the funding announcement or award page")
