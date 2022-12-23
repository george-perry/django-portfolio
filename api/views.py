from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from .serializers import *

# Create your views here.

class SkillView(generics.ListCreateAPIView):

    queryset = Skills.objects.all()
    serializer_class = SkillSerializer    

