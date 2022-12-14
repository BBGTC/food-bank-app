from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.tokens import RefreshToken

from contributors.models import User

# The serializer for fetching tokens (access & refresh)
class GetTokensViewSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: User):
        token = super(TokenObtainPairSerializer, cls).get_token(user)
        token['username'] = user.username
        return token

class SignUpViewSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    auth = serializers.SerializerMethodField()

    user: User

    class Meta:
        fields = ('email', 'password', 'confirm_password', 'auth')
        model = User

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"password": "Passwords don't match"})
        return attrs
 
    def create(self, validated_data):
        user = User.objects.create(
            email=validated_data['email'],
            username=validated_data['email']
        )

        user.set_password(validated_data['password'])
        user.save()

        self.user = user

        return user

    def get_auth(self, obj):
        refresh = RefreshToken.for_user(self.user)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
