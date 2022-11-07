from django.urls import path
from .views import GetTokensView, SignUpView

urlpatterns = [
    path('login', GetTokensView.as_view(), name='get_tokens'),
    path('signup', SignUpView.as_view(), name='auth_register'),
]
