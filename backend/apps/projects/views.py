from django.http import HttpResponse


def projects(request):
    return HttpResponse("Placeholder: List all Projects")


def project(request, project_id):
    return HttpResponse(f"Placeholder: Get Project with id={project_id}")
