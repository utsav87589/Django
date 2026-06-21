from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from app import db
from app.models import User
from werkzeug.security import generate_password_hash, check_password_hash


auth_bp = Blueprint('auth', __name__)

### ------------------login route
@auth_bp.route('/', methods = ['POST'])
@auth_bp.route('/login', methods = ['POST'])
def login() : 

    data = request.get_json()

    if not data : 
        return jsonify({"status" : "error", "message" : "missing request data"}), 400
    
    username = data.get('username')
    password = data.get('password')

    if not username or not password : 
        return jsonify({"status" : "error", "message" : "username and password required"}), 400
    
    user = User.query.filter_by(username = username).first()

    if user and check_password_hash(user.password, password) : 
        session['user_id'] = user.id
        return jsonify({
            "status" : "success",
            "message" : f"login successful, hello {user.username}",
            "user_id" : user.id
        }), 200
    
    return jsonify({
        "status" : "error",
        "message" : "invalid credentials"
    }), 401


### ---------------------register route
@auth_bp.route("/register", methods = ['POST'])
def register() : 

    data = request.get_json()

    if not data : 
        return jsonify({
            "status" : "error",
            "message"  : "missing the requested data"
        }), 400
    
    username = data.get("username")
    password = data.get("password")

    if not username or not password : 
        return jsonify({
            "status" : "error",
            "message" : "missing credentials"
        }), 400
    
    existing_user = User.query.filter_by(username = username).first()

    if existing_user : 
        return jsonify({
            "status" : "error",
            "message" : "username already taken"
        }), 400
    
    password_hashed = generate_password_hash(password)

    new_user = User(username = username, password = password_hashed)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({
        "status" : "success",
        "message" : f"succesfully created the user : {username}"
    }), 201


### ----------------------------logout route
@auth_bp.route('/logout', methods = ['POST'])
def logout() : 

    session.pop('user_id', None)

    return jsonify({
        "status" : "success",
        "message" : "Log out of the session successfully"
    }), 200