from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from app import db
from app.models import Task, User

task_bp = Blueprint('task', __name__)

### rendering our dashboard page after successful login
@task_bp.route('/dashboard', methods = ['GET'])
def render_dashboard() : 

    if 'user_id' not in session : 
        return redirect(url_for('auth.login_page'))
    
    user = User.query.get(session['user_id'])

    return render_template('/dashboard.html', username = user.username)

### route to actually load the tasks
@task_bp.route('api/dashboard', methods = ['POST'])
def get_tasks() : 

    user_id = session.get(user_id)

    if not user_id : 

        return jsonify({"status" : "error", "message" : "unauthorised user"}), 401
    
    user_tasks = Task.query.filter_by(user_id = user_id).all()

    tasks_data = [
        {"id" : task.id, "title" : task.title, "status" : task.status}
        for task in user_tasks
    ]

    return jsonify({"status" : "success", "tasks" : tasks_data})