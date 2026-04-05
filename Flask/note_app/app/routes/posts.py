from flask import Blueprint, session, request, render_template, redirect, url_for, flash
from app import db
from app.models import User, Post


posts_bp = Blueprint('posts', __name__)


### the basic route to show the posts
@posts_bp.route('/posts')
def view_posts() : 

    if 'user' not in session : 
        return redirect(url_for('auth.login'))
    
    posts = Post.query.filter_by(user_id = session['user']).all()
    return render_template('posts.html')


### adding a new post
