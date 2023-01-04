from django.shortcuts import render, get_object_or_404
from django.apps import apps

# Create your views here.

def index(request, *args, **kwargs):

    return render(request, 'frontend/index.html')

def post_index(request, pk):

    Posts = apps.get_model('api', 'Posts')

    post = get_object_or_404(Posts, pk=pk)

    return render(request, 'frontend/index.html', {'post': post})
