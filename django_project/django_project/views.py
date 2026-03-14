from django.http import HttpResponse

def home(request) : 

    return HttpResponse('<h1> This is the main home page </h1>')