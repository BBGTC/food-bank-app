# Generated by Django 4.1.3 on 2022-11-30 17:52

from django.db import migrations, models
import django.db.models.deletion
import uuid


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('events', '0001_initial'),
        ('contributors', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Donation',
            fields=[
                ('id', models.UUIDField(default=uuid.uuid4, primary_key=True, serialize=False)),
                ('is_verified', models.BooleanField(default=False)),
                ('date', models.DateTimeField()),
                ('basic_basket', models.FloatField()),
                ('fruits_and_vegies', models.FloatField()),
                ('dairy', models.FloatField()),
                ('inedibles', models.FloatField()),
                ('groceries', models.FloatField()),
                ('contributor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='contributors.contributor')),
                ('event', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='events.event')),
            ],
        ),
    ]