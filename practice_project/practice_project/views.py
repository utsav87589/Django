from django.http import HttpResponse
from django.shortcuts import render

def home(request) : 

    return render(request, 'home.html')

def about(response) : 

    return HttpResponse("This is about page, just learning Django lol, like a begineer haha")