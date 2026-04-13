from flask import Blueprint, render_template, request, session, redirect, url_for, flash
from app.models import User, Post
from flask_login import current_user

### setting up the home app
home_bp = Blueprint('home', __name__)

### main home route
@home_bp.route('/')
def home() :

    username_in_session = session.get('user')

    if current_user.is_authenticated : 
        return render_template('tasks/home.html', posts = current_user.posts)
    
    posts = Post.query.all()
    return render_template('/tasks/home.html', posts = posts)
