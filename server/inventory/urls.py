from django.urls import path

from .views import InventoryViewSet

urlpatterns = [
    path('', InventoryViewSet.as_view({ 'get': 'retrieve' }))
]
