from rest_framework import serializers

from apps.projects.models import Contributor, EmberProject, Funding, Publication


class ContributorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contributor
        fields = "__all__"


class FundingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funding
        fields = "__all__"


class PublicationSerializer(serializers.ModelSerializer):
    authors = ContributorSerializer(many=True, read_only=True)

    class Meta:
        model = Publication
        fields = "__all__"


class ProjectSerializer(serializers.ModelSerializer):
    data_administrator = ContributorSerializer(read_only=True)
    related_publications = PublicationSerializer(many=True, read_only=True)
    funding = FundingSerializer(many=True, read_only=True)

    class Meta:
        model = EmberProject
        fields = "__all__"
