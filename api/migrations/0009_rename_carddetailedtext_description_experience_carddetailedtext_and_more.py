# Generated by Django 4.1.4 on 2022-12-29 02:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_rename_carddetailedtext_experience_carddetailedtext_description_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='experience',
            old_name='cardDetailedText_description',
            new_name='cardDetailedText',
        ),
        migrations.RenameField(
            model_name='experience',
            old_name='cardSubtitle_position',
            new_name='cardSubtitle',
        ),
        migrations.RenameField(
            model_name='experience',
            old_name='cardTitle_company',
            new_name='cardTitle',
        ),
        migrations.RenameField(
            model_name='experience',
            old_name='title_time',
            new_name='title',
        ),
    ]