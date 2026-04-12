from flask import Blueprint, session, request, render_template, redirect, url_for, flash
from app import db
from app.models import User, Post
from ..data import posts


posts_bp = Blueprint('posts', __name__)


### the basic route to show the posts
@posts_bp.route('/posts/<int:post_id>')
def view_posts(post_id) :

    post_to_show = None

    for p in posts: 
        if p['id'] == post_id:
            post_to_show = p
            break

    return render_template('/tasks/posts.html', post = post_to_show)

### route to edit, add or delete a particular post
@posts_bp.route('/manage_posts')
def manage_posts() : 

    return render_template('tasks/manage_posts.html')