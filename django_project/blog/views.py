from django.shortcuts import render
# Create your views here.

cars = [
     {
          'brand' : 'Ford',
          'model' : 'Mustang 2026 5.0 V8',
          'color' : 'black'
     },
     {
          'brand' : 'Toyota',
          'model' : 'Land cruiser',
          'color' :'White'
     }
]

def home(request) : 

     context = {
          'cars' : cars
     }
     return render(request, 'blogs/index.html', context)

def about(request) : 

    return render(request, 'blogs/about.html')