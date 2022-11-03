from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated

from users.selectors import select_contributor_data
from users.services import set_contributor_data

from rest_framework.response import Response
from .serializers import ContributorSerializer

from api import exceptions


class UserViewSet(viewsets.ViewSet):
    permission_classes = IsAuthenticated,

    def retrieve(self, request):
      contributor_data = select_contributor_data(request.user)

      if contributor_data is None:
        raise exceptions.ContributorDataNotSetException()
      
      serializer = ContributorSerializer(contributor_data)
      
      return Response(serializer.data)

    def create(self, request):

      if select_contributor_data(request.user) is not None:
        raise exceptions.ContributorDataExistsException()

      serializer = ContributorSerializer(data=request.data)
      serializer.is_valid(raise_exception=True)

      set_contributor_data(request.user, serializer.data)

      return Response(serializer.data)