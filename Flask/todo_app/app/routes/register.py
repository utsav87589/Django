from flask import Blueprint, render_template, request, redirect, url_for, flash, session, flash
from app import db
from app.models import User

register_bp = Blueprint('register', __name__)


### main register route
@register_bp.route('/register', methods = ['GET', 'POST'])
def register() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        if username and password :

            new_user = User(username = username, password = password)
            db.session.add(new_user)
            db.session.commit()
            flash('Registration successful', 'success')

            print(f"username entered : {username} :: password : {password}")

            return redirect(url_for('auth.login'))


    return render_template('register.html')
