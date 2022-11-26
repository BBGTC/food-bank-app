from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import GetTokensView, SignUpView

urlpatterns = [
    path('login', GetTokensView.as_view(), name='get_tokens'),
    path('login/refresh', TokenRefreshView.as_view(), name='refresh_tokens'),
    path('signup', SignUpView.as_view(), name='auth_register'),
]
