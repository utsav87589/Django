from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db
from app.models import User
from werkzeug.security import generate_password_hash, check_password_hash


auth_bp = Blueprint('auth', __name__)

### login route
@auth_bp.route('/')
@auth_bp.route('/login', methods = ['GET', 'POST'])
def login() : 

    if request.method == 'POST' : 
        username = request.form.get('login-username')
        password = request.form.get('login-password')

        print(f"username  : {username} \npassword : {password}")

        return redirect(url_for('dashboard.dashboard'))

    return render_template('login.html')

### register route
@auth_bp.route('/register')
def register() : 

    return render_template('register.html')