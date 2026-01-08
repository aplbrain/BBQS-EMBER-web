from django.db import models


class Contributor(models.Model):
    """
    Person or Organization metadata.
    """

    id = models.BigAutoField(primary_key=True)
    external_identifiers = models.JSONField(
        blank=True, default=dict, help_text="External identifiers such as ORCID"
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
    # TODO: Add role (?)
    # role = models.CharField(max_length=100, blank=True, help_text="Role of the contributor in this project")
