from flask import Blueprint, render_template, request, session, redirect, url_for, flash
from ..data import posts

### setting up the home app
home_bp = Blueprint('home', __name__)

### main home route
@home_bp.route('/')
def home() :

    logged_in_user = session.get('user')

    if logged_in_user : 

        return render_template('/tasks/home.html', posts = posts)
    
    return render_template('/tasks/home.html', posts = posts)
