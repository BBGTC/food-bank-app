from rest_framework import serializers
from contributors.models import ContributorData

class ContributorSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ContributorData
    fields = ('first_name', 'middle_name', 'surname', 'second_surname', 'phone', 'rfc')