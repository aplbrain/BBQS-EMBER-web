from django import forms
from django.contrib.postgres.forms import SimpleArrayField
from django_jsonform.forms.fields import JSONFormField

from apps.projects.models import EmberProject
from apps.projects.models.common import LIST_STR_SCHEMA


class EmberProjectForm(forms.ModelForm):
    # JSON Form Field using list of strings schema
    model_organism = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    access_level_emberdandisets = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    access_level_restricted_datasets = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    access_level_access_vault_ids = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    related_repositories = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    related_dandisets = JSONFormField(required=False, schema=LIST_STR_SCHEMA)
    related_data = JSONFormField(required=False, schema=LIST_STR_SCHEMA)

    class Meta:
        model = EmberProject
        fields = "__all__"
