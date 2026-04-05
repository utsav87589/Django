from app import db

### This is our parent table
class User(db.Model) : 

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(100), nullable = False)
    password = db.Column(db.String(200), nullable = False)

    posts = db.relationship('Post', backref = 'owner', lazy = False)


class Post(db.Model) : 

    title = db.Column(db.String(200), nullable = False)
    content = db.Column(db.String(2000), nullable = False)
    status = db.Coumn(db.String(20), deafult = 'active')
    is_public = db.Column(db.Boolean, default = False)

    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
