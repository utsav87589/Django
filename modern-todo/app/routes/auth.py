from flask import Blueprint, render_template, request, redirect, url_for, flash, session
from app import db

auth_bp = Blueprint('auth', __name__)

@auth_bp.route('/')
def home() : 

    return render_template('login.html')