"""
Application Factory hub

Initializes core Flask extensions (SQLAlchemy, CORS) and aggregates
all blueprints to construct the main application instance
"""

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS


# Global extension instances. They are instantiated here but bound to the 
# application later inside the factory function via init_app().
db = SQLAlchemy()

def create_app() : 

    """
    Constructs and configures the Flask application instance using the factory pattern.
    
    Returns:
        app (Flask): The fully configured Flask application object.
    """

    app = Flask(__name__)

    # Core Application & Database Configurations
    app.config['SECRET_KEY'] = 'secret-powder'# Used to sign session cookies securely
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False# Disabled to reduce memory overhead

    # Session & Security Settings (Crucial for frontend cookie handling)
    app.config['SESSION_COOKIE_SAMESITE'] = None
    app.config['SESSION_COOKIE_SECURE'] = True# Ensures cookies are only transmitted over HTTPS/secure tunnels

    # Cross-Origin Resource Sharing (CORS) Configuration
    # Required to allow your vanilla JavaScript frontend (running on Live Server port 5500) 
    # to communicate securely with this Flask backend while passing session credentials.
    CORS(app, supports_credentials=True, origins=["http://127.0.0.1:5500", "http://localhost:5500"])

    # Initialize extensions with the application context
    db.init_app(app)

    # Deferred Blueprint Imports
    # Imported inside the function to prevent circular dependency errors with db imports
    from app.routes.auth import auth_bp
    from app.routes.dashboard import dashboard_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)

    # Database Tables Creation Lifecycle
    with app.app_context():
        # Generates SQLite tables based on models if they do not already exist
        db.create_all()

    return app