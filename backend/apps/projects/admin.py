from django.contrib import admin

from apps.projects.models import Contributor, EmberProject, Funding, Publication

# Register your models here.

admin.site.register(EmberProject)
admin.site.register(Contributor)
admin.site.register(Funding)
admin.site.register(Publication)
