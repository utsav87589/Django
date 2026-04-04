from flask import Blueprint, session, request, render_template, redirect, url_for, flash
from app import db
from app.models import User


posts_bp = Blueprint('posts', __name__)


### the basic route to show the posts
@posts_bp.route('/posts')
def view_posts() : 

    return render_template('posts.html')