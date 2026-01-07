from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from apps.projects.models.project import EmberProject


def projects(request):
    projects_list = EmberProject.objects
    return HttpResponse(f"Found {projects_list.count()} EMBER Projects")


def project(request, project_id):
    project = get_object_or_404(EmberProject, pk=project_id)
    return HttpResponse(f"Found EMBER Project: {project.project_id}")
