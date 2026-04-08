from flask import Blueprint, render_template, request, session, redirect, url_for, flash

### sample posts
posts = [
    {
    'title' : 'How to learn code',
    'content' : 'Learning coding is just more than sitting infront of the computer and doing the fancy things shown out there in the movies or somewhere else'
    },
    {
        'title' : 'My 471 day of coding every single day',
        'content' : 'Somedays are not as easy like walk in the garden, you might been grinding hard for the whole week just to get to a dead end and then have to work all the way back up and forth again!'
    }
]



### setting up the home app
home_bp = Blueprint('home', __name__)


### main home route
@home_bp.route('/')
def home() : 

    return render_template('/tasks/home.html', posts = posts)