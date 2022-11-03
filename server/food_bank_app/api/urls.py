from django.urls import path, include

from .views import HelloWorldView


urlpatterns = [
  path('hello', HelloWorldView.as_view()),
  path('auth/', include('api.auth.urls')),
  path('users/', include('api.users.urls')),
]