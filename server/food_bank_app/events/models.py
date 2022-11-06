from django.db import models
import uuid

class Address(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    street = models.CharField(null=False, max_length=30)
    exterior_number = models.CharField(null=False, max_length=8)
    interior_number = models.CharField(null=False, max_length=5)
    zip_code = models.IntegerField(null=False)
    state = models.CharField(null=False, max_length=30)
    municipality = models.CharField(null=False, max_length=30)
    neighborhood = models.CharField(null=False, max_length=30)

# Create your models here.
class Event(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    address = models.OneToOneField(Address, on_delete=models.SET_NULL, null=True)
    
    start_date = models.DateField(null=False)
    end_date = models.DateField(null=False)
    start_time = models.TimeField(null=False)
    end_time = models.TimeField(null=False)