# Generated by Django 4.1.3 on 2022-11-21 04:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('contributors', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contributor',
            name='second_surname',
            field=models.CharField(blank=True, max_length=20),
        ),
    ]