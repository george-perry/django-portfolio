# Generated by Django 5.1.4 on 2025-02-12 16:53

import django.db.models.deletion
from django.db import migrations, models

def populate_unique_ids(apps, schema_editor):
    Post = apps.get_model('api', 'Posts')
    for index, post in enumerate(Post.objects.all(), start=1):
        post.id = index
        post.save()

class Migration(migrations.Migration):

    dependencies = [
        ('api', '0021_alter_posts_date'),
    ]

    operations = [
        migrations.AddField(
            model_name='posts',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='posts',
            name='project',
            field=models.OneToOneField(on_delete=django.db.models.deletion.RESTRICT, related_name='posts', to='api.projects'),
        ),
        migrations.RunPython(populate_unique_ids),  # Add this to populate unique IDs
    ]
