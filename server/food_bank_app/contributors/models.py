import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models
from phonenumber_field.modelfields import PhoneNumberField

class User(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    email = models.EmailField(
            null=False,
            unique=True,
            editable=False,
            max_length=20
    )

class Address(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    street = models.CharField(null=False, max_length=30)
    exterior_number = models.CharField(null=False, max_length=8)
    interior_number = models.CharField(null=False, blank=True, max_length=5)
    zip_code = models.IntegerField(null=False)
    state = models.CharField(null=False, max_length=30)
    municipality = models.CharField(null=False, max_length=30)
    neighborhood = models.CharField(null=False, max_length=30)

class Contributor(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    address = models.OneToOneField(Address, on_delete=models.SET_NULL, null=True)

    first_name = models.CharField(null=False, blank=False, max_length=20)
    middle_name = models.CharField(null=False, blank=True, max_length=20)
    surname = models.CharField(null=False, blank=False, max_length=20)
    second_surname = models.CharField(null=False, blank=True, max_length=20)
    phone = PhoneNumberField(null=False, blank=False, unique=False)
    rfc = models.CharField(null=True, blank=False, max_length=13)

    def get_full_name(self):
        names = [ self.first_name, self.middle_name, self.surname, self.second_surname ]

        while ('' in names):
            names.remove('')

        return ' '.join(names)

