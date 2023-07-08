from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Skills, Experience
from .serializers import *
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated, IsAdminUser, AllowAny 
from rest_framework.authtoken.models import Token
from django.contrib.auth import get_user_model 

# Allow Any on Updates

class SkillView(generics.ListCreateAPIView):

    queryset = Skills.objects.all()
    serializer_class = SkillSerializer  
    permission_classes = (IsAuthenticatedOrReadOnly,)

class SkillDetailView(viewsets.ModelViewSet):

    serializer_class = SkillSerializer     
    permission_classes = (IsAuthenticatedOrReadOnly,)
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'trace', 'delete',]

    def get_queryset(self):
        return Skills.objects.all()

    
    def get(self, request, pk):
 
        skill = Skills.objects.get(pk=pk)
        data = SkillSerializer(skill).data
        return Response(data)

    def delete(self, request, pk):

        skill = Skills.objects.get(pk=pk).delete()
        return Response()

class ExperienceView(generics.ListCreateAPIView):

    queryset = Experience.objects.all()
    serializer_class = ExperienceSerializer     
    permission_classes = (IsAuthenticatedOrReadOnly,)

class ExperienceDetailView(viewsets.ModelViewSet):

    serializer_class = ExperienceSerializer     
    permission_classes = (IsAuthenticatedOrReadOnly,)
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

class ProjectView(generics.ListCreateAPIView):

    queryset = Projects.objects.all()
    serializer_class = ProjectSerializer     
    permission_classes = (IsAuthenticatedOrReadOnly,)

class ProjectDetailView(viewsets.ModelViewSet):

    serializer_class = ProjectSerializer     
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'trace', 'delete',]
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Projects.objects.all()

    
    def get(self, request, pk):
        project = Projects.objects.get(pk=pk)
        data = ProjectSerializer(project).data
        return Response(data)

    def delete(self, request, pk):

        project = Projects.objects.get(pk=pk).delete()
        return Response()

class PostView(generics.ListCreateAPIView):

    queryset = Posts.objects.all()
    serializer_class = PostSerializer     
    permission_classes = (IsAuthenticatedOrReadOnly,)

class PostDetailView(viewsets.ModelViewSet):

    serializer_class = PostSerializer     
    http_method_names = ['get', 'put', 'patch', 'head', 'options', 'trace', 'delete',]
    permission_classes = (AllowAny,)

    def get_queryset(self):
        return Posts.objects.all()

    
    def get(self, request, pk):
        post = Posts.objects.get(pk=pk)
        data = PostSerializer(post).data

        # When Creating new, get rid of ['id']
        project = Projects.objects.get(pk=data['project']['id'])
        # project = Projects.objects.get(pk=data['project'])
        project_data = ProjectSerializer(project).data
        data['project'] = project_data
        return Response(data)

    def delete(self, request, pk):

        post = Posts.objects.get(pk=pk).delete()
        return Response()