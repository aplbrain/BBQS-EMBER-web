from django.urls import path

from apps.core.views import ApiIndexView

urlpatterns = [
    path("", ApiIndexView.as_view(), name="index"),
]
