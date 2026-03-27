from flask import Flask
from flaks_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

def app() : 

    app = Flask(__name__)

    app.cpnfig['SECRET_KEY'] = 'secret-powder'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqllite:///todo.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    from app.routes.auth import auth_bp
    from app.routes.auth import tasks_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(tasks_bp)

    return app
