from django.db import models

class EmberProject(models.Model):
    """
    EMBER Project metadata.
    """

    project_id = models.CharField(primary_key=True)
    project_title = models.CharField(help_text="Title of the project")
    project_description = models.CharField(help_text="Text description of the project")
    data_use_agreement = models.JSONField(blank=True, help_text="Description or reference to the data use agreement governing access to restricted or controlled data")
    data_use_agreement_required = models.BooleanField(default=False, help_text="Indicates whether a data use agreement is required to access any project data")
    data_availability_emberdandi = models.BooleanField(default=False, verbose_name="Data in EMBER-DANDI?", help_text="Indicates if data is available in EMBER-DANDI")
    data_availability_emberrestricted = models.BooleanField(default=False, verbose_name="Data in EMBERrestrictred?", help_text="Indicates if data is available in EMBERrestricted")
    data_availability_embervault = models.BooleanField(default=False, verbose_name="Data in EMBERvault?", help_text="Indicates if data is available in EMBERvault")
    access_tier_summary = models.CharField(help_text="Text description of different data tiers")
    data_administrator = models.ManyToManyField("Contributor", through="ProjectContributor", related_name="projects", blank=True, help_text="Primary point of contact for data management")
    last_metadata_update = models.DateTimeField(help_text="Date and time of last metadata update")
    metadata_version = models.CharField(default="1", help_text="Version of the metadata")
    ember_doi = models.CharField(blank=True, help_text="DOI in EMBER system (empty string allowed until assigned)")
    access_level_emberdandisets = models.JSONField(default=list, blank=True, help_text="EMBER-DANDI dandiset ids")
    access_level_restricted_datasets = models.JSONField(default=list, blank=True, help_text="Restricted dataset ids")
    access_level_access_vault_ids = models.JSONField(default=list, blank=True, help_text="EMBERvault dataset ids")
    related_publications = models.JSONField(default=list, blank=True, help_text="DOIs for related publications")  # Question - should this be a ManyToMany field with a Publication class?
    related_repositories = models.JSONField(default=list, blank=True, help_text="Identifiers for related repositories")
    related_dandisets = models.JSONField(default=list, blank=True, help_text="DOIs for related dandisets")
    related_data = models.JSONField(default=list, blank=True, help_text="Identifiers for other related datasets")
    funding = models.ManyToManyField("Funding", related_name="projects", blank=True, help_text="Funding sources supporting this project")
