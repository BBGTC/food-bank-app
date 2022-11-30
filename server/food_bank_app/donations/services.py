from .models import Donation
from contributors.models import Contributor

def create_donation_by_contributor(donation: Donation, contributor: Contributor):
    donation.contributor = contributor
    Donation.objects.create(donation)

def verify_donation(donation: Donation):
    donation.is_verified = True
    donation.save()