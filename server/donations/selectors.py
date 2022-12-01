from .models import Donation
from contributors.models import Contributor

def select_donations_by_contributor(user: Contributor):
    return Donation.objects.filter(contributor=user, is_verified=True)

def select_donation(donation_id):
    return Donation.objects.get(id=donation_id)