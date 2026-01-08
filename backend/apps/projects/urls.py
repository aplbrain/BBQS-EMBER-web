from django.urls import path

from apps.projects.views import ProjectsView, ProjectView

urlpatterns = [
    path("", ProjectsView.as_view(), name="projects"),
    path("<str:project_id>/", ProjectView.as_view(), name="project"),
]
