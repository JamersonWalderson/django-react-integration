# Generated by Django 3.2 on 2022-09-28 13:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portifolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='history',
            field=models.TextField(blank=True, null=True, verbose_name='Quem sou eu'),
        ),
    ]
