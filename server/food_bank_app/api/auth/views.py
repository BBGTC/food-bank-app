from rest_framework import generics
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView

from contributors.models import Contributor
from .serializers import SignUpviewSerializer, GetTokensViewSerializer

class SomeView(APIView):
    def get(self, request):
        return Response('Hello, wor!')

class GetTokensView(TokenObtainPairView):
    permission_classes = AllowAny,
    serializer_class = GetTokensViewSerializer

class SignUpView(generics.CreateAPIView):
    queryset = Contributor.objects.all()
    permission_classes = AllowAny,
    serializer_class = SignUpviewSerializer