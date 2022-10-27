from django.urls import path
from .views import GetTokensView, SignUpView, SomeView

urlpatterns = [
    path('login', GetTokensView.as_view(), name='get_tokens'),
    path('signup', SignUpView.as_view(), name='auth_register'),
    path('hello', SomeView.as_view()),
]