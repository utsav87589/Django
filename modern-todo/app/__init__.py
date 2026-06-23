from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS

db = SQLAlchemy()

def create_app() : 

    app = Flask(__name__)

    app.config['SECRET_KEY'] = 'secret-powder'
    app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///todo.db'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

    app.config['SESSION_COOKIE_SAMESITE'] = None
    app.config['SESSION_COOKIE_SECURE'] = True

    CORS(app, supports_credentials=True, origins=["http://127.0.0.1:5500", "http://localhost:5500"])

    db.init_app(app)

    from app.routes.auth import auth_bp
    from app.routes.dashboard import dashboard_bp
    app.register_blueprint(auth_bp)
    app.register_blueprint(dashboard_bp)

    with app.app_context():
        db.create_all()

    return app