from django.shortcuts import get_object_or_404
from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.serializers import MessageSerializer
from apps.projects.models.project import EmberProject
from apps.projects.serializers import ProjectSerializer


@extend_schema(tags=["projects"])
class ProjectsView(APIView):
    @extend_schema(
        operation_id="projects_list",
        responses={200: ProjectSerializer(many=True), 404: MessageSerializer},
        description="Get all EMBER Projects",
    )
    def get(self, request):
        projects_list = EmberProject.objects
        serializer = ProjectSerializer(projects_list, many=True)
        return Response(serializer.data)


@extend_schema(tags=["projects"])
class ProjectView(APIView):
    @extend_schema(
        operation_id="projects_retrieve",
        responses={200: ProjectSerializer, 404: MessageSerializer},
        description="Get an EMBER Project by its project id",
        parameters=[
            OpenApiParameter(
                name="project_id",
                type=str,
                location=OpenApiParameter.PATH,
                description="Project Id",
            )
        ],
    )
    def get(self, request, project_id: str):
        project = get_object_or_404(EmberProject, project_id=project_id)
        serializer = ProjectSerializer(project)
        return Response(serializer.data)
