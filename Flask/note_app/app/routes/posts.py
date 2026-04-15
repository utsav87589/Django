from flask import Blueprint, session, request, render_template, redirect, url_for, flash
from app import db
from app.models import User, Post
from flask_login import current_user

posts_bp = Blueprint('posts', __name__)

### the basic route to show the posts
@posts_bp.route('/posts/<int:post_id>')
def view_posts(post_id) :

    posts = Post.query.all()

    post_to_show = None

    for p in posts: 
        if p['id'] == post_id:
            post_to_show = p
            break

    return render_template('/tasks/posts.html', post = post_to_show)

### route to edit, add or delete a particular post
@posts_bp.route('/manage_posts', methods = ['GET', 'POST'])
def manage_posts() : 

    if current_user.is_authenticated : 

        if request.method == 'POST' : 

            title = request.form.get('post_title')
            content = request.form.get('post_content')
            status = request.form.get('status')

            print(f"{title} \n{content} \n{status}")

            is_public = True if status == 'on' else False

            new_post = Post(
                title = title,
                content = content,
                is_public = is_public,
                user_id = current_user.id
            )

            db.session.add(new_post)
            db.session.commit()

            flash('Post created succesfully', redirect(url_for('home.home')))

    return render_template('tasks/manage_posts.html')