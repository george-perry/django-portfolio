from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('skills', SkillView.as_view()),
    path('skills/<int:pk>', SkillDetailView.as_view({'put': 'update', 'delete': 'destroy'})),
    path('experience', ExperienceView.as_view()),
    path('experience/<int:pk>', ExperienceDetailView.as_view({'put': 'update', 'delete': 'destroy'})),
    path('projects', ProjectView.as_view()),
    path('projects/<int:pk>', ProjectDetailView.as_view({'put': 'update', 'delete': 'destroy'})),
    path('posts', PostView.as_view()),
    path('posts/<int:pk>', PostDetailView.as_view({'put': 'update', 'delete': 'destroy'})),
]
