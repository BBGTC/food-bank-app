from datetime import datetime
from django.db import models

import uuid

# Create your models here.
class Inventory(models.Model):
    CATEGORY_CHOICES = (
        ('BB', 'Basic Basket'),
        ('FV', 'Fruits and Vegetables'),
        ('DA', 'Dairy'),
        ('IE', 'Inedibles'),
        ('GR', 'Groceries')
     )

    MONTH_CHOICES = (
        (1, 'January'),
        (2, 'February'),
        (3, 'March'),
        (4, 'April'),
        (5, 'May'),
        (6, 'June'),
        (7, 'July'),
        (8, 'August'),
        (9, 'September'),
        (10, 'October'),
        (11, 'November'),
        (12, 'December')
    )

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    category = models.CharField(
        null=False,
        max_length=2,
        choices=CATEGORY_CHOICES,
        default='BB'
    )
    demand = models.FloatField(null=False, blank=False, default=0.0)
    supply = models.FloatField(null=False, blank=False, default=0.0)
    month = models.IntegerField(
            null=False,
            choices=MONTH_CHOICES,
            default=datetime.now().month
    )
    year = models.IntegerField(null=False, default=datetime.now().year)
    examples = models.CharField(null=True, blank=True, max_length=80)
