from drf_spectacular.utils import OpenApiParameter, extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.serializers import MessageSerializer


@extend_schema(tags=["projects"])
class ProjectsView(APIView):
    @extend_schema(
        operation_id="projects_list",
        responses={200: MessageSerializer},  # TODO: ProjectSerializer(many=True)
        description="Get all EMBER Projects",
    )
    def get(self, request):
        return Response(
            {"message": "Placeholder: List all Projects"},
        )


@extend_schema(tags=["projects"])
class ProjectView(APIView):
    @extend_schema(
        operation_id="projects_retrieve",
        responses={200: MessageSerializer},  # TODO: ProjectSerializer
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
        return Response(
            {"message": f"Placeholder: Get Project with id={project_id}"},
        )
