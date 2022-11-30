from rest_framework import serializers
from .models import Address, Event

class AddressSerializer(serializers.ModelSerializer):
    class Meta:
        model = Address
        fields = (
            'street',
            'exterior_number',
            'interior_number',
            'zip_code',
            'state',
            'municipality',
            'neighborhood'
        )

class EventSerializer(serializers.ModelSerializer):
    address = AddressSerializer()
    
    class Meta:
        model = Event
        fields = (
            'id',
            'address',
            'title',
            'start_date',   
            'end_date',
            'start_time',
            'end_time',
            'image_url'
        )