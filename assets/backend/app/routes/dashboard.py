from flask import Blueprint, render_template, request, redirect, url_for, flash, session

dashboard_bp = Blueprint('dashboard', __name__)

###dashboard main route
@dashboard_bp.route('/dashboard')
def dashboard() : 

    return render_template('dashboard.html')