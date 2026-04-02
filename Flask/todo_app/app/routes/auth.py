from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db
from app.models import User
from werkzeug.security import generate_password_hash, check_password_hash


auth_bp = Blueprint('auth', __name__)


### register route
@auth_bp.route('/register', methods = ['GET', 'POST'])
def register() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        password_hashed = generate_password_hash(password)

        if username and password :

            new_user = User(username = username, password = password_hashed)
            db.session.add(new_user)
            db.session.commit()
            flash('Registration successful', 'success')

            print(f"username entered : {username} :: password : {password}")

            return redirect(url_for('auth.login'))


    return render_template('register.html')


### login route
@auth_bp.route('/login', methods = ['GET', 'POST'])
def login() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        user = User.query.filter_by(username = username).first()

        if user and check_password_hash(user.password, password) : 
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