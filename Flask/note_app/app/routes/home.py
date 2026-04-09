from flask import Blueprint, render_template, request, session, redirect, url_for, flash
from ..data import posts

### setting up the home app
home_bp = Blueprint('home', __name__)

### main home route
@home_bp.route('/')
def home() :

    return render_template('/tasks/home.html', posts = posts)