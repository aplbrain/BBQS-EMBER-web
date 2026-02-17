from django.db import models
from django_jsonform.models.fields import JSONField

from apps.projects.models.common import LIST_STR_SCHEMA
from apps.projects.validators import doi_validator, validate_list_ember_dandi_ids, year_validator


class EmberProject(models.Model):
    """
    EMBER Project metadata.

    v1.1.0 - https://github.com/aplbrain/BBQS-EMBER-Data-Model/releases/tag/v1.1.0
    """

    id = models.BigAutoField(primary_key=True)
    project_id = models.CharField(help_text="Project identifier", unique=True)
    project_title = models.CharField(help_text="Title of the project")
    project_description = models.TextField(help_text="Text description of the project")
    year = models.IntegerField(
        blank=True, help_text="Start year of the  project", validators=[year_validator]
    )
    keywords = JSONField(
        default=list,
        blank=True,
        help_text="Keywords associated with the project",
        schema=LIST_STR_SCHEMA,
    )
    model_organisms = models.ManyToManyField(
        "Taxonomy",
        blank=True,
        help_text="Model organisms used in this project",
    )
    data_use_agreement = models.TextField(
        blank=True,
        help_text="Description or reference to the data use agreement governing access to restricted or controlled data",
    )
    data_use_agreement_required = models.BooleanField(
        default=False,
        help_text="Indicates whether a data use agreement is required to access any project data",
    )
    data_availability_emberdandi = models.BooleanField(
        default=False,
        verbose_name="Data in EMBER-DANDI?",
        help_text="Indicates if data is available in EMBER-DANDI",
    )
    data_availability_emberrestricted = models.BooleanField(
        default=False,
        verbose_name="Data in EMBERrestrictred?",
        help_text="Indicates if data is available in EMBERrestricted",
    )
    data_availability_embervault = models.BooleanField(
        default=False,
        verbose_name="Data in EMBERvault?",
        help_text="Indicates if data is available in EMBERvault",
    )
    access_tier_summary = models.TextField(
        blank=True, help_text="Text description of different data tiers"
    )
    data_administrator = models.ForeignKey(
        "Contributor",
        on_delete=models.RESTRICT,
        help_text="Primary point of contact for data management",
    )
    last_metadata_update = models.DateTimeField(
        help_text="Date and time of last metadata update"
    )  # default=timezone.now
    metadata_version = models.CharField(default="1", help_text="Version of the metadata")
    ember_doi = models.CharField(
        blank=True,
        help_text="DOI in EMBER system (empty string allowed until assigned)",
        validators=[doi_validator],
    )
    access_level_emberdandisets = JSONField(
        default=list,
        blank=True,
        help_text="EMBER-DANDI dandiset ids",
        schema=LIST_STR_SCHEMA,
        validators=[validate_list_ember_dandi_ids],
    )
    access_level_restricted_datasets = JSONField(
        default=list,
        blank=True,
        help_text="Restricted dataset ids",
        schema=LIST_STR_SCHEMA,
    )
    access_level_access_vault_ids = JSONField(
        default=list,
        blank=True,
        help_text="EMBERvault dataset ids",
        schema=LIST_STR_SCHEMA,
    )
    related_publications = models.ManyToManyField(
        "Publication", blank=True, help_text="Publications associated with this project"
    )
    related_repositories = JSONField(
        default=list,
        blank=True,
        help_text="Identifiers for related repositories",
        schema=LIST_STR_SCHEMA,
    )
    related_dandisets = JSONField(
        default=list,
        blank=True,
        help_text="DOIs for related dandisets",
        schema=LIST_STR_SCHEMA,
    )
    related_data = JSONField(
        default=list,
        blank=True,
        help_text="Identifiers for other related datasets",
        schema=LIST_STR_SCHEMA,
    )
    funding = models.ManyToManyField(
        "Funding",
        related_name="projects",
        blank=True,
        help_text="Funding sources supporting this project",
    )
    website_content = models.TextField(
        blank=True, help_text="Custom content for the website project page"
    )

    def __str__(self):
        return self.project_id

    class Meta:
        verbose_name = "EMBER Project"
        verbose_name_plural = "EMBER Projects"
