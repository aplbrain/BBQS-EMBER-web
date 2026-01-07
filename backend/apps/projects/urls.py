from django.urls import path

from . import views


urlpatterns = [
    path("", views.projects, name="projects"),
    path("<str:project_id>/", views.project, name="project"),
]