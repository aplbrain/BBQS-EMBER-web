from drf_spectacular.utils import extend_schema
from rest_framework.response import Response
from rest_framework.views import APIView

from apps.core.serializers import MessageSerializer


class ApiIndexView(APIView):
    @extend_schema(
        responses={200: MessageSerializer},
        description="EMBER API Root",
    )
    def get(self, request):
        return Response(
            {"message": "Welcome to the EMBER API!"},
        )
