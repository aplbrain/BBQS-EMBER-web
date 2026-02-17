from django.db import models


class Taxonomy(models.Model):
    """
    Organism taxonomy metadata

    v1.1.0
    """

    class TaxonomicRank(models.TextChoices):
        SPECIES = "SPECIES"
        GENUS = "GENUS"
        FAMILY = "FAMILY"

    id = models.BigAutoField(primary_key=True)
    taxonomy_id = models.IntegerField(help_text="NCBI Taxonomy ID", unique=True)
    rank = models.CharField(
        choices=TaxonomicRank.choices, help_text="Taxonomic rank", default=TaxonomicRank.SPECIES
    )
    current_scientific_name = models.CharField(help_text="Current scientific name")
    common_name = models.CharField(blank=True, help_text="Common name")
    image_source = models.CharField(blank=True, help_text="Image source path")

    def __str__(self):
        return self.current_scientific_name
