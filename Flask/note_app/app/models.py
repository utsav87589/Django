from app import db, login_manager
from flask_login import UserMixin

### This is our parent table
class User(db.Model, UserMixin) : 

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(200), nullable = False)

    posts = db.relationship('Post', backref = 'owner', lazy = False)

### adding the user loader
@login_manager.user_loader
def load_user(user_id) : 
    return User.query.get(int(user_id))

### this is our post table (child of the user table)
class Post(db.Model) : 

    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200), nullable = False)
    content = db.Column(db.String(2000), nullable = False)
    status = db.Column(db.String(20), default = 'active')
    is_public = db.Column(db.Boolean, default = False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
