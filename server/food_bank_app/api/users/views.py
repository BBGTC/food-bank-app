from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from users.models import Contributor, ContributorData
from rest_framework.response import Response
from .serializers import ContributorSerializer

from api import exceptions


class UserViewSet(viewsets.ViewSet):
    permission_classes = IsAuthenticated,

    def retrieve(self, request):
      try:
        contributor_data = ContributorData.objects.all().get(contributor_id=request.user)
      except ContributorData.DoesNotExist:
        raise exceptions.UserDataNotSetException()
      
      serializer = ContributorSerializer(contributor_data)
      
      return Response(serializer.data)

    def create(self, request):

      if ContributorData.objects.filter(contributor_id=request.user).count() == 1:
        raise exceptions.ContributorDataExistsException()

      serializer = ContributorSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)

      contributor = ContributorData.objects.create(
        **serializer.data,
        contributor_id=request.user 
      )
      contributor.save()

      return Response(serializer.data)