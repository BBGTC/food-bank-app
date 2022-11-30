from django.urls import path, include
from .views import DonationViewSet, VerifyDonation

urlpatterns = [
    path('', DonationViewSet.as_view({
        'post': 'create',
        'patch': 'update',
        'get': 'list',
    })),
    path('<uuid:pk>/', DonationViewSet.as_view(
        { 'get': 'retrieve' }
    )),
    path('verify/<uuid:donation_id>', VerifyDonation.as_view())
]