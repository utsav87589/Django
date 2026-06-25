"""
Authentication Blueprint modules

Handles all user session management, registration, authentication, 
and secured password hashing for the application API

"""

# Third part library imports
from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify, make_response
from werkzeug.security import generate_password_hash, check_password_hash

# TODO: Clean up unused imports below once the refactoring is complete
# from flask import render_template, redirect, url_for, flash

# Local application module imports
from app import db
from app.models import User

# Define the authentication blueprint
# This is registered under the '/auth' prefix in the main app factory (app/__init__.py)
auth_bp = Blueprint('auth', __name__)


# Login route
@auth_bp.route('/login', methods = ['POST'])
def login() : 

    """
    Authenticates a user and establishes a session

    Expected JSON input : 
     - username (str)
     - password (str|int)

     Returns : 
     - 200 OK : Success message and user ID
     - 400/401 Unauthorized : Specific error payload

    """

    data = request.get_json()

    # Fail early if the client sent an empty body or incorrect content-type header
    if not data : 
        return make_response(jsonify({"status" : "error", "message" : "missing request data"}), 400)
    
    username = data.get('username')
    password = data.get('password')

    # Cast to string to prevent crashed if a user inputs a purely numeric password
    password = str(password)

    if not username or not password : 
        return make_response(jsonify({"status" : "error", "message" : "username and password required"}), 400)
    
    user = User.query.filter_by(username = username).first()

    # Securly compare the plaintext password against the salted database hash
    if user and check_password_hash(user.password, password) : 

        # Establish the server-side session cookie for user authentication
        session['user_id'] = user.id

        return make_response(jsonify({
            "status" : "success",
            "message" : f"login successful, hello {user.username}",
            "user_id" : user.id
        }), 200)
    
    # Generic error message prevents bad actors from guessing valid usernames
    return make_response(jsonify({
        "status": "error",
        "message": "invalid credentials"
    }), 401)


# Register route
@auth_bp.route("/register", methods = ['POST'])
def register() : 

    """
    Registers a new user in the database

    Expected JSON input : 
     - username (str)
     - password (str|int)

     Returns : 
     - 201 Created : Success message and user created in the database
     - 400 : Specific error payload

    """

    data = request.get_json()

    # Fail early if the client sent an empty body or incorrect content-type header
    if not data : 
        return make_response(jsonify({
            "status" : "error",
            "message"  : "missing the requested data"
        }), 400)
    
    username = data.get("username")
    password = data.get("password")

    # Cast to string to prevent crashed if a user inputs a purely numeric password
    password = str(password)

    if not username or not password : 
        return make_response(jsonify({
            "status" : "error",
            "message" : "missing credentials"
        }), 400)
    
    # Check if username is already taken before creating a new account
    existing_user = User.query.filter_by(username = username).first()

    # Generic error message prevents using the pre-existed username
    if existing_user : 
        return make_response(jsonify({
            "status" : "error",
            "message" : "username already taken"
        }), 400)
    
    # Hashing the password for the secured database operations
    password_hashed = generate_password_hash(password)

    new_user = User(username = username, password = password_hashed)
    db.session.add(new_user)
    db.session.commit()

    # Success message upon registration in the database
    return make_response(jsonify({
        "status" : "success",
        "message" : f"succesfully created the user : {username}"
    }), 201)


# Logout route
@auth_bp.route('/logout', methods = ['POST'])
def logout() : 

    """
    Terminates the current user session

     Returns : 
     - 200 OK : Success message with cleared session cookie

    """

    # Remove the user ID from the session to log them out safely.
    # Passing None prevents a KeyError if the user is already logged out.
    session.pop('user_id', None)

    return make_response(({
        "status" : "success",
        "message" : "Log out of the session successfully"
    }), 200)