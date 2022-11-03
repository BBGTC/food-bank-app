import uuid
from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
# Create your models here.

class Contributor(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    email = models.EmailField(null=False, unique=True,
                              editable=False, max_length=20)

class ContributorData(models.Model):
    contributor_id = models.OneToOneField(
        Contributor, on_delete=models.CASCADE, primary_key=True)

    first_name = models.CharField(null=False, blank=False, max_length=20)
    middle_name = models.CharField(null=False, blank=True, max_length=20)
    surname = models.CharField(null=False, blank=False, max_length=20)
    second_surname = models.CharField(null=False, blank=False, max_length=20)
    phone = PhoneNumberField(null=False, blank=False, unique=False)
    rfc = models.CharField(null=True, blank=False, max_length=13)
