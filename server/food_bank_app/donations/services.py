from .models import Donation
from contributors import Contributor

def create_donation_by_contributor(donation: Donation, contributor: Contributor):
    donation.contributor = contributor
    Donation.objects.create(donation)