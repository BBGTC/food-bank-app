import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.


class Contributor(AbstractUser):

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    first_name = models.CharField(null=False, blank=False, max_length=20)
    middle_name = models.CharField(null=False, blank=True, max_length=20)
    surname = models.CharField(null=False, blank=False, max_length=20)
    second_surname = models.CharField(null=False, blank=False, max_length=20)

    phone = PhoneNumberField(null=False, blank=False, unique=False)
    email = models.EmailField(null=False, unique=True,
                              editable=False, max_length=20)
    rfc = models.CharField(null=True, blank=False, max_length=13)
