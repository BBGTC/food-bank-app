from rest_framework import serializers

from .models import Address, Contributor

class AddressSerializer(serializers.ModelSerializer):
  class Meta:
    model = Address
    fields = (
            'street',
            'exterior_number',
            'interior_number',
            'zip_code',
            'municipality',
            'neighborhood'
    )

class ContributorSerializer(serializers.ModelSerializer):
  address = AddressSerializer()

  class Meta:
    model = Contributor
    fields = (
            'first_name',
            'middle_name',
            'surname',
            'second_surname',
            'phone',
            'rfc',
            'address'
    )
