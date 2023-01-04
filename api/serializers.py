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

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Projects
        fields = ('id', 'title', 'text', 'link', 'skills'
        )

class PostSerializer(serializers.ModelSerializer):

    # Use unless creating new
    project = ProjectSerializer(read_only = True)


    class Meta:
        model = Posts
        fields = ('title', 'project', 'date', 'content'
        )