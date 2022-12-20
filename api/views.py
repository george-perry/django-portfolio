from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import generics
from .models import *
from .serializers import *

# Create your views here.

class SkillView(generics.ListAPIView):
    queryset = Skills.objects.all()
    serializer_class = SkillSerializer