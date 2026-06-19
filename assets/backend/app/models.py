from app import db

class Task(db.Model) : 

    id = db.Column(db.Integer, primary_key = True)
    task = db.Column(db.String(500), nullable = False)
    status = db.Column(db.String(20), default = 'Pending')

    ### link of the primary key
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable = False)
    

class User(db.Model) : 

    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(25), nullable = False)
    password = db.Column(db.String(256), nullable = False)

    ### checking all the tasks of the user loging in
    tasks = db.relationship('Task', backref = 'owner', lazy = False)