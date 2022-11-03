from django.urls import path

from .views import UserViewSet

urlpatterns = [
  path('self-detail/', UserViewSet.as_view({'get': 'retrieve', 'post': 'create'})),
]