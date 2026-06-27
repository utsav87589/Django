"""
Database Schema Configurations.

Defines the SQLAlchemy object-relational mapping (ORM) models 
representing core database tables and data relationships.
"""

from app import db

class Task(db.Model) : 

    """
    Represents individual to-do list tasks created by application users.
    """

    id = db.Column(db.Integer, primary_key = True)

    # Restricts task text to 500 characters max; cannot be left blank
    task = db.Column(db.String(500), nullable = False)

    # Tracking state: Defaults to incomplete when a task is first created
    is_completed = db.Column(db.Boolean, nullable = False, default = False)

    # Database Relationship Anchor (Foreign Key)
    # Hooks each task directly to the unique ID of the user who authored it
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    

class User(db.Model) : 

    """
    Represents application user accounts and credential metadata.
    """

    id = db.Column(db.Integer, primary_key = True)

    # Enforces a short username character cap to align with frontend UI form inputs
    username = db.Column(db.String(25), nullable = False)

    # Large character limit allocated to comfortably house long, hashed secure passwords
    password = db.Column(db.String(256), nullable = False)

    # One-to-Many Relationship Configuration
    # Allows a user object to immediately access all their related tasks via 'user.tasks'.
    # Using lazy=False ensures that when a user is loaded, their tasks are queried instantly.
    # The 'owner' backref automatically injects an 'owner' property onto individual Task rows
    tasks = db.relationship('Task', backref = 'owner', lazy = False)