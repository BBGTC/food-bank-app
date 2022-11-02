from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from users.models import Contributor

# The serializer for fetching tokens (access & refresh)

class GetTokensViewSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user: Contributor):
        token = super(TokenObtainPairSerializer, cls).get_token(user)
        token['username'] = user.username
        return token

class SignUpviewSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=Contributor.objects.all())]
    )

    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Contributor
        fields = ('email', 'password', 'confirm_password')

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"password": "Passwords don't match"})
        return attrs

    def create(self, validated_data):
        contributor = Contributor.objects.create(
            email=validated_data['email'],
            username=validated_data['email']
        )
        contributor.set_password(validated_data['password'])
        contributor.save()

        return contributor
