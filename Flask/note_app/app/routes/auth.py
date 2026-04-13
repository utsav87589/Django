from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db
from app.models import User, Post
from flask_login import login_user, logout_user

### setting up our auth app
auth_bp = Blueprint('auth', __name__)


### login page
@auth_bp.route('/login', methods = ['GET', 'POST'])
def login() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        print(f"{username} :: {password}")

        user = User.query.filter_by(username = username).first()

        if user and user.password == password : 

            login_user(user)
            flash('Login successful', 'success')
            return redirect(url_for('home.home'))

        else : 
            flash('Invalid credentials, try again or register', 'danger')


    return render_template('auth/auth.html')


### register route
@auth_bp.route('/register', methods = ['GET', 'POST'])
def register() : 

    if request.method == 'POST' : 
        username = request.form.get('username')
        password = request.form.get('password')

        if username and password :
            new_user = User(username = username, password = password)
            db.session.add(new_user)
            db.session.commit()

            flash('Registration successful', 'sucsess')

            return redirect(url_for('auth.login'))

    return render_template('auth/register.html')


### Logout route
@auth_bp.route('/logout')
def logout() : 

    logout_user()
    flash('Logged out succesfuuly', 'info')

    return redirect(url_for('auth.login'))