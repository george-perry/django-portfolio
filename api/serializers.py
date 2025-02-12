from rest_framework import serializers
from .models import *

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skills
        fields = ('name', 'link', 'id', 'category'
        )

class ExperienceSerializer(serializers.ModelSerializer):

    # Uncomment to re-order
    # id = serializers.IntegerField()

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

    # Use unless editing... requires change in view to edit project
    project = ProjectSerializer(read_only = True)

    # Uncomment to re-order
    # id = serializers.IntegerField()

    class Meta:
        model = Posts
        fields = ('id', 'title', 'project', 'date', 'content', 'github', 'active')
