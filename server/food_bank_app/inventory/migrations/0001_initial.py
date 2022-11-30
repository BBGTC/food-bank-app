# Generated by Django 4.1.3 on 2022-11-30 01:52

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Inventory',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('category', models.CharField(choices=[('BB', 'Basic Basket'), ('FV', 'Fruits and Vegetables'), ('DA', 'Dairy'), ('IE', 'Inedibles'), ('GR', 'Groceries')], default='BB', max_length=2)),
                ('demand', models.FloatField(default=0.0)),
                ('supply', models.FloatField(default=0.0)),
                ('month', models.IntegerField(choices=[(1, 'January'), (2, 'February'), (3, 'March'), (4, 'April'), (5, 'May'), (6, 'June'), (7, 'July'), (8, 'August'), (9, 'September'), (10, 'October'), (11, 'November'), (12, 'December')], default=11)),
                ('year', models.IntegerField(default=2022)),
                ('examples', models.CharField(blank=True, max_length=80, null=True)),
            ],
        ),
    ]
