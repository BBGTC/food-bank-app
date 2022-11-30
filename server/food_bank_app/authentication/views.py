from contributors.models import User
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.views import TokenObtainPairView

from .serializers import GetTokensViewSerializer, SignUpViewSerializer

class GetTokensView(TokenObtainPairView):
    permission_classes = AllowAny,
    serializer_class = GetTokensViewSerializer

class SignUpView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = AllowAny,
    serializer_class = SignUpViewSerializer
