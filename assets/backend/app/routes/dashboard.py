from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify
from app import db
from app.models import User, Task

dashboard_bp = Blueprint('dashboard', __name__)

### ------------------main dashboard route
@dashboard_bp.route('/dashboard', methods = ['GET'])
def render_dashboard() : 

    current_user_id = session.get('user_id')

    if not current_user_id : 

        return jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401
    
    user_tasks = Task.query.filter_by(user_id = current_user_id).all()

    if not user_tasks : 

        return jsonify({
            "status" : "error",
            "tasks"  : [],
            "message" : "you need to create tasks to display"
        }), 200
    
    task_list = [{
        "id" : t.id,
        "task" : t.task,
        "is_completed" : t.is_completed
    } for t in user_tasks]

    return jsonify({
        "status" : "success",
        "tasks" : task_list
    }), 200


###----------------------adding the tasks on the main dashboard
@dashboard_bp.route("/add_tasks", methods = ['POST'])
def add_tasks() : 

    current_user_id = session.get('user_id')

    if not current_user_id : 

        return jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401
    
    data =  request.get_json()
    task_text = data.get('task_text')

    if not task_text or task_text.strip() == "" :

        return jsonify({
            "status" : "error",
            "message" : "task cannot be an empty string"
        }), 400
    
    new_task = Task(task = task_text.strip(), user_id = current_user_id, is_completed = False)

    db.session.add(new_task)
    db.session.commit()

    return jsonify({
        "status" : "success",
        "message" : "task created succesfully"
    }), 201


###-----------------------completing the tasks on the main dashboard
@dashboard_bp.route('/complete_tasks/<int:task_id>', methods = ['PATCH'])
def complete_tasks(task_id) : 

    current_user_id = session.get('user_id')

    if not current_user_id : 

        return jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401   

    task_item = Task.query.filter_by(id = task_id, user_id = current_user_id).first()

    if not task_item : 
        return jsonify({
            "status" : "error",
            "message" : "task item not found or login error"
        }), 404
    
    task_item.is_completed = not task_item.is_completed
    db.session.commit()

    return jsonify({
        "status" : "success",
        "message" : f"{task_item.task} is now completed"
    }), 200


###----------------------deleting the task on the main dashboard page
@dashboard_bp.route('/delete_task/<int:task_id>', methods = ['DELETE'])
def delete_task(task_id) : 

    current_user_id = session.get('user_id')

    if not current_user_id : 

        return jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401   

    task_item = Task.query.filter_by(id = task_id, user_id = current_user_id).first()

    if not task_item : 
        return jsonify({
            "status" : "error",
            "message" : "task item not found or login error"
        }), 404
    
    db.session.delete(task_item)
    db.session.commit()

    return jsonify({
        "status" : "success",
        "message" : "task item has succesfully deleted"
    }), 200