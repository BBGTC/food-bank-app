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
            'neighborhood',
            'state'
    )

class ContributorSerializer(serializers.ModelSerializer):
  address = AddressSerializer(read_only=True)
  email = serializers.SerializerMethodField('get_field')
  class Meta:
    model = Contributor
    fields = (
            "first_name",
            "middle_name",
            "surname",
            "second_surname",
            "phone",
            "rfc",
            "address",
            "get_full_name",
            "email"
    )

  def get_field(self, obj):
    return self.instance.user.email
