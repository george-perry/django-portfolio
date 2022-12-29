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