# Generated by Django 4.0.2 on 2022-02-20 09:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_alter_post_author'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='post',
            name='author',
        ),
    ]
