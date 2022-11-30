from django.urls import path, include
from .views import DonationViewSet, VerifyDonation

urlpatterns = [
    path('', DonationViewSet.as_view({
        'post': 'create',
        'patch': 'update',
        'get': 'list',
    })),
    path('verify/<uuid:donation_id>', VerifyDonation.as_view())
]