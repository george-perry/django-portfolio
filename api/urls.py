from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path('skills', SkillView.as_view()),
    path('skills/<int:pk>', SkillDetailView.as_view({'put': 'update', 'delete': 'destroy'})),
]
