from django.db import models
import uuid

# Create your models here.
class Inventory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    
    basic_basket_supply = models.FloatField(null=False, blank=False, default=0.0)
    basic_basket_demand = models.FloatField(null=False, blank=False, default=0.0)
    fruits_and_vegetables_supply = models.FloatField(null=False, blank=False, default=0.0)
    fruits_and_vegetables_demand = models.FloatField(null=False, blank=False, default=0.0)
    dairy_supply = models.FloatField(null=False, blank=False, default=0.0)
    dairy_demand = models.FloatField(null=False, blank=False, default=0.0)
    inedibles_supply = models.FloatField(null=False, blank=False, default=0.0)
    inedibles_demand = models.FloatField(null=False, blank=False, default=0.0)