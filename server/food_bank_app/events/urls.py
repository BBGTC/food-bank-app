from django.urls import path

from .views import EventViewSet

urlpatterns = [
    path('<uuid:pk>/', EventViewSet.as_view(
        { 'get': 'retrieve' }
    )),
    path('', EventViewSet.as_view(
        { 'get' : 'retrieve_list',
          'post' : 'create' }
    ))
]