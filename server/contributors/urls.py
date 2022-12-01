from django.urls import path

from .views import ContributorViewSet

urlpatterns = [
    path('me', ContributorViewSet.as_view(
        { 'get': 'retrieve', 'post': 'create', 'patch': 'update' }
    )),
]
