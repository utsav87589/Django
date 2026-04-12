from flask import Blueprint, render_template, request, session, redirect, url_for, flash
from app.models import User, Post

### setting up the home app
home_bp = Blueprint('home', __name__)

### main home route
@home_bp.route('/')
def home() :

    username_in_session = session.get('user')

    if username_in_session : 
        user = User.query.filter_by(username=username_in_session).first()
        
        if user : 

            user_posts = user.posts
            return render_template('/tasks/home.html', posts = user_posts)
    
    posts = Post.query.all()

    
    return render_template('/tasks/home.html', posts = posts)
