from rest_framework import serializers
from .models import Donation
from contributors.serializers import ContributorSerializer
from events.serializers import EventSerializer

class DonationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Donation
        fields = (
            'id',
            'contributor',
            'event',
            'date',
            'basic_basket',
            'fruits_and_vegies',
            'dairy',
            'inedibles'
        )