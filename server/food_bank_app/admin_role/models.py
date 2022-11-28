import uuid

from django.contrib.auth.models import AbstractUser
from django.db import models

class Admin(AbstractUser):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    email = models.EmailField(
            null=False,
            unique=True,
            editable=False,
            max_length=20
    )

