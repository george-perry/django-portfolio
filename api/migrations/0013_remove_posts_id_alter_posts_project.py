# Generated by Django 4.1.4 on 2022-12-31 02:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0012_projects_link_projects_skills_projects_text'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='posts',
            name='id',
        ),
        migrations.AlterField(
            model_name='posts',
            name='project',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.projects'),
        ),
    ]