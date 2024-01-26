# Generated by Django 4.2.7 on 2024-01-15 18:30

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('selections', '0002_delete_image_pairing'),
    ]

    operations = [
        migrations.CreateModel(
            name='Image_pairing',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image_dataset', models.CharField(help_text='Dataset visualized by image', max_length=20)),
                ('image1', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(9)])),
                ('image2', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(9)])),
                ('selection', models.PositiveIntegerField(validators=[django.core.validators.MaxValueValidator(1)])),
            ],
        ),
    ]