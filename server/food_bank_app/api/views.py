from rest_framework import views
from rest_framework.response import Response
from rest_framework.permissions import AllowAny

# Create your views here.

class HelloWorldView(views.APIView):
  permission_classes = AllowAny,
  def get(self, request):
    message = {
      'message': 'Hello, world!'
    }
    return Response(message)