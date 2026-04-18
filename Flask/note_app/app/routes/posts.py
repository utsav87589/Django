from flask import Blueprint, session, request, render_template, redirect, url_for, flash
from app import db
from app.models import User, Post
from flask_login import current_user

posts_bp = Blueprint('posts', __name__)

### the basic route to show the individual post
@posts_bp.route('/post/<int:post_id>')
def view_posts(post_id) :

    post = Post.query.get(post_id)

    return render_template('/tasks/posts.html', post = post)

### route to show all the posts under the manage posts route
@posts_bp.route('/manage_posts', methods = ['GET', 'POST'])
def manage_posts() : 

    posts = Post.query.filter_by(user_id = current_user.id).all()
    return render_template('tasks/manage_posts.html', posts = posts)


### route to add a post
@posts_bp.route('/add_posts', methods = ['GET', 'POST'])
def add_posts() : 


    if current_user.is_authenticated : 

        if request.method == 'POST' : 

            title = request.form.get('post_title')
            content = request.form.get('post_content')
            status = request.form.get('status')

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

            print(f"{title} \n{content} \n{is_public}")

    return render_template('tasks/add_posts.html')


### route to edit the post
@posts_bp.route('/post/<int:post_id>')
def edit_post(post_id) : 

    post = Post.query.get(post_id)

    return render_template('/tasks/edit_post.html', post = post)