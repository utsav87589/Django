from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from app import db
from app.models import User
from flask_login import login_user, logout_user
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint('auth', __name__)


#---------Login page logic
@auth_bp.route('/')
@auth_bp.route('/login', methods = ['GET'])
def login_page() : 

    return render_template('login.html')


# Data api to fetch from the JSON object
@auth_bp.route('/api/login', methods = ['POST'])
def login_api() : 

    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username = username).first()

    if user and check_password_hash(user.password, password) : 

        session['user_id'] = user.id
        return jsonify({"status" : "success", "message" : "Login Successful!"}), 200
    
    else : 

        return jsonify({"status" : "error", "message" : "Invalid credentials"}), 401
    

#---------------Register page logic
@auth_bp.route('/register', methods = ['GET'])
def register_page() : 

    return render_template('register.html')

@auth_bp.route('/api/register', methods = ['POST'])
def register_api() : 

    data = request.get_json()

    username = data.get('username')
    password = data.get('password')

    password_hash = generate_password_hash(password)

    if username and password : 

        new_user = User(username = username, password = password_hash)
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"status" : "success", "message" : "successfully registered"}), 200
    
    else : 
        return jsonify({"status" : "error", "message" : "Enter the credentials to register please"}), 401