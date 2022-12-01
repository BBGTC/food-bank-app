from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.viewsets import ViewSet

from .exceptions import ContributorExistsException, ContributorNotSetException
from .selectors import select_contributor
from .serializers import ContributorSerializer
from .services import create_contributor


class ContributorViewSet(ViewSet):
    permission_classes = IsAuthenticated,

    def retrieve(self, request):
        contributor = select_contributor(request.user)

        if contributor is None:
            raise ContributorNotSetException()

        serializer = ContributorSerializer(contributor)

        return Response(serializer.data)

    def create(self, request):
        if select_contributor(request.user) is not None:
            raise ContributorExistsException()

        serializer = ContributorSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)

        create_contributor(request.user, request.data)

        return Response(serializer.data)

    def update(self, request):
        contributor = select_contributor(request.user)

        if contributor is None:
            raise ContributorNotSetException()
        
        serializer = ContributorSerializer(instance=contributor, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)

        serializer.save()

        return Response(serializer.data)
