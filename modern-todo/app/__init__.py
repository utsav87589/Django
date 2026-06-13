from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager


db = SQLAlchemy()
login_manager = LoginManager()

def create_app() : 

    app = Flask(__name__)

    login_manager.init_app(app)
    login_manager.login_view = 'auth.login'

    app.config['SECRET_KEY'] = 'SECRET'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///modern-todo.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    db.init_app(app)

    from app.routes.auth import auth_bp
    from app.routes.task import task_bp

    app.register_blueprint(auth_bp, url_prefix = '/')
    app.register_blueprint(task_bp, url_prefix = '/')

    return app