from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db
from app.models import User


### setting up our auth app
auth_bp = Blueprint('auth', __name__)


### main home page/login page
@auth_bp.route('/', methods = ['GET', 'POST'])
def login() : 

    return render_template('auth.html')