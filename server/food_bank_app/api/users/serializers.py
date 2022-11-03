from rest_framework import serializers
from users.models import Contributor, ContributorData

class ContributorSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ContributorData
    fields = ('first_name', 'middle_name', 'surname', 'second_surname', 'phone', 'rfc')