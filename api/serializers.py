from rest_framework import serializers
from .models import *

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('name', 'link', 'id', 'category'
        )

class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'title', 'cardTitle',  'cardSubtitle', 'cardDetailedText'
        )