# Generated by Django 3.2.4 on 2024-04-28 02:26

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogpost',
            name='author',
        ),
        migrations.RemoveField(
            model_name='blogpost',
            name='category',
        ),
        migrations.RemoveField(
            model_name='blogpost',
            name='tags',
        ),
    ]
