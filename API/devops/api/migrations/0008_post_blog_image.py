# Generated by Django 4.0.2 on 2022-02-20 10:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0007_post_author'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='blog_image',
            field=models.ImageField(default='API/react-logo.png', upload_to='images/'),
        ),
    ]
