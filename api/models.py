from django.db import models

# Create your models here.

skill_type = (
    ('language', 'language'),
    ('framework', 'framework'),
    ('library', 'library'),
    ('other', 'other')
)

class Skills(models.Model):
    name = models.CharField(max_length=20, default="")
    category = models.CharField(max_length=20, choices=skill_type, default="")
    link = models.TextField(default="")


class Experience(models.Model):
    title = models.CharField(max_length=100, default="")
    cardTitle = models.CharField(max_length=100, default="")
    cardSubtitle = models.CharField(max_length=100, default="")
    cardDetailedText = models.TextField(default="")

class Projects(models.Model):
    title = models.CharField(max_length=100, default="")
    text = models.TextField(default="")
    link = models.TextField(default="")
    skills = models.CharField(max_length=100, default="")

class Posts(models.Model):
    title = models.CharField(max_length=100, default="")
    project = models.OneToOneField(Projects, on_delete=models.RESTRICT, related_name='posts', primary_key=True)
    date = models.DateTimeField(null=True, blank=True)
    content = models.TextField(null=True, blank=True)
    github = models.TextField(null=True, blank=True)
    active = models.TextField(null=True, blank=True)