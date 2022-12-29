from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Skills, Experience
from .serializers import *
from rest_framework import viewsets

# Create your views here.

class SkillView(generics.ListCreateAPIView):

    queryset = Skills.objects.all()
    serializer_class = SkillSerializer  

    # for obj in queryset:
    #     print(obj.id)

class SkillDetailView(viewsets.ModelViewSet):

    serializer_class = SkillSerializer     
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'trace', 'delete',]

    def get_queryset(self):
        return Skills.objects.all()

    
    def get(self, request, pk):
        # serializer_class = SkillSerializer     
        skill = Skills.objects.get(pk=pk)
        data = SkillSerializer(skill).data
        return Response(data)

    def delete(self, request, pk):

        skill = Skills.objects.get(pk=pk).delete()
        return Response()



class ExperienceView(generics.ListCreateAPIView):

    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer     

class ExperienceDetailView(viewsets.ModelViewSet):

    serializer_class = ExperienceSerializer     
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'trace', 'delete',]

    def get_queryset(self):
        return Experience.objects.all()

    
    def get(self, request, pk):
        experience = Experience.objects.get(pk=pk)
        data = ExperienceSerializer(experience).data
        return Response(data)

    def delete(self, request, pk):

        experience = Experience.objects.get(pk=pk).delete()
        return Response()
