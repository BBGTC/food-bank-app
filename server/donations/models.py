from django.db import models
from events.models import Event
from contributors.models import Contributor

import uuid

class Donation(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    is_verified = models.BooleanField(default=False)
    contributor = models.ForeignKey(Contributor, on_delete=models.CASCADE)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    date =  models.DateTimeField()
    
    basic_basket = models.FloatField()
    fruits_and_vegies = models.FloatField()
    dairy = models.FloatField()
    inedibles = models.FloatField()
    groceries = models.FloatField()
