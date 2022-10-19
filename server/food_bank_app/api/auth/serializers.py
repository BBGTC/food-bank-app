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
        # Custom user claims
        token['email'] = user.email
        return token

# Serializer for creating a new user


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
        fields = ('email', 'password', 'confirm_password', 'first_name',
                  'middle_name', 'surname', 'second_surname', 'phone')

    def validate(self, attrs):
        if attrs['password'] != attrs['confirm_password']:
            raise serializers.ValidationError(
                {"password": "Passwords don't match"})

        if 'middle_name' not in attrs:
          attrs['middle_name'] = ''

        return attrs

    def create(self, validated_data):
        user = Contributor.objects.create(
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            middle_name=validated_data['middle_name'],
            surname=validated_data['surname'],
            second_surname=validated_data['second_surname'],
            phone=validated_data['phone'],

        )

        user.set_password(validated_data['password'])
        user.save()

        return user
