from django.contrib import admin

from apps.projects.forms import EmberProjectForm
from apps.projects.models import Contributor, EmberProject, Funding, Publication, Taxonomy


@admin.register(EmberProject)
class EmberProjectAdmin(admin.ModelAdmin):
    list_display = ["project_id", "project_title", "ember_doi", "data_administrator"]
    form = EmberProjectForm


admin.site.register(Contributor)
admin.site.register(Funding)
admin.site.register(Publication)
admin.site.register(Taxonomy)
