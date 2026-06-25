"""
Dashboard Blueprint modules

Handles all task management, creating, completing and
deleting the tasks

"""

# Third party library imports
from flask import Blueprint, render_template, request, redirect, url_for, flash, session, jsonify, make_response

# TODO: Clean up unused imports below once the refactoring is complete
# from flask import render_template, redirect, url_for, flash

# Local application module imports
from app import db
from app.models import User, Task

# Define the dashboard blueprint
# This is registered under the  '/dashboard' prefix in the main app factory (app/__init__.py)
dashboard_bp = Blueprint('dashboard', __name__)


# Dashboard route
@dashboard_bp.route('/dashboard', methods = ['GET'])
def render_dashboard() : 

    """
    Send back the task data created by the user

     Returns : 
     - 200 OK : Success message and task related data
     - 401 Unauthorized : Unauthorized access to the task data without in the cookie

    """

    # Fail early if someone is trying to access the page without logged into the sessions
    current_user_id = session.get('user_id')

    if not current_user_id : 

        return make_response(jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401)
    
    # Fetching all the related tasks to the 'in session user'
    user_tasks = Task.query.filter_by(user_id = current_user_id).all()

    # Generic response with success message if no task exist
    if not user_tasks : 

        return make_response(jsonify({
            "status" : "success",
            "tasks"  : [],
            "message" : "you need to create tasks to display"
        }), 200)
    
    # Displaying the task data if they exist with corresponding matching details in the database
    task_list = [{
        "id" : t.id,
        "task" : t.task,
        "is_completed" : t.is_completed
    } for t in user_tasks]

    return make_response(jsonify({
        "status" : "success",
        "tasks" : task_list
    }), 200)


# Add task to dashboard route
@dashboard_bp.route("/add_tasks", methods = ['POST'])
def add_tasks() : 

    """
    Add the new task data to the database

    Expected JSON input : 
    - task_text (str)

    returns : 
    - 201 Created : Task created succesfully in the database
    - 400/401 Unauthorized : Specific error payload

    """

    # Fail early if someone is trying to access the page without logged into the sessions
    current_user_id = session.get('user_id')

    if not current_user_id : 

        return make_response(jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401)
    
    # Strip away the empty spaces from front and back of the text string and sending error if incorrect or empty input
    data =  request.get_json()
    task_text = data.get('task_text')

    if not task_text or task_text.strip() == "" :

        return make_response(jsonify({
            "status" : "error",
            "message" : "task cannot be an empty string"
        }), 400)
    
    new_task = Task(task = task_text.strip(), user_id = current_user_id, is_completed = False)

    db.session.add(new_task)
    db.session.commit()

    # Generic message upon successful task creation
    return make_response(jsonify({
        "status" : "success",
        "message" : "task created succesfully"
    }), 201)


# Completing / Toggling task on the main dashboard route
@dashboard_bp.route('/complete_tasks/<int:task_id>', methods = ['PATCH'])
def complete_tasks(task_id) : 

    """
    Toggles the completion state of a specific task.

    URL Parameters:
    - task_id (int): The unique ID of the target task.

    Returns:
    - 200 OK: Task completion state updated successfully.
    - 401 Unauthorized / 404 Not Found: Specific error payload.
    """

    # Fail early if someone is trying to access the page without logged into the sessions
    current_user_id = session.get('user_id')

    if not current_user_id : 

        return make_response(jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401)   
    
    # Ensure the task exists and belongs strictly to the currently logged-in user
    task_item = Task.query.filter_by(id = task_id, user_id = current_user_id).first()

    if not task_item : 
        return make_response(jsonify({
            "status" : "error",
            "message" : "task item not found or login error"
        }), 404)

    # Toggle the boolean state (True becomes False, False becomes True)    
    task_item.is_completed = not task_item.is_completed
    db.session.commit()

    return make_response(jsonify({
        "status" : "success",
        "message" : f"{task_item.task} is now completed"
    }), 200)


# Dlelting the task on the main dashboard
@dashboard_bp.route('/delete_task/<int:task_id>', methods = ['DELETE'])
def delete_task(task_id) :

    """
    Delete the corresponding task

    Expected JSON input : 
    - task_id (str)

    returns : 
    - 200 OK : Task deleted from the database
    - 401 Unauthorized/ 404 Not Found  : Specific error payload

    """

    # Fail early if someone is trying to access the page without logged into the sessions
    current_user_id = session.get('user_id')

    if not current_user_id : 

        return make_response(jsonify({
            "status" : "error",
            "message" : "unauthorised user, try login again please!"
        }), 401)
    
    # Matching the corrsponding task id and response message if not found
    task_item = Task.query.filter_by(id = task_id, user_id = current_user_id).first()

    if not task_item : 
        return make_response(jsonify({
            "status" : "error",
            "message" : "task item not found or login error"
        }), 404)
    
    # Removing the task from the database schema with the completion of request message
    db.session.delete(task_item)
    db.session.commit()

    return make_response(jsonify({
        "status" : "success",
        "message" : "task item has succesfully deleted"
    }), 200)