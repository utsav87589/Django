from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db
from app.models import User

auth_bp = Blueprint('auth', __name__)

### login route
@auth_bp.route('/login', methods = ['GET', 'POST'])
def login() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username = username).first()

        if user and user.password == password : 
            session['user'] = username
            flash('Login successful', 'success')
            return redirect(url_for('tasks.view_tasks')) 

        else : 

            flash('Invalid credentials try again or register!', 'danger')

    return render_template('login.html')

### logout route
@auth_bp.route('/logout')
def logout() : 

    session.pop('user', None)
    flash('Logged out', 'info')

    return redirect(url_for('auth.login'))