from django.contrib import admin

from apps.projects.models import EmberProject, Contributor, Funding

# Register your models here.

admin.site.register(EmberProject)
admin.site.register(Contributor)
admin.site.register(Funding)