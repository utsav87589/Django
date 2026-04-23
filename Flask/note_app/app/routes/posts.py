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
@posts_bp.route('/edit/<int:post_id>', methods = ['GET', 'POST'])
def edit_post(post_id) :

    post = Post.query.get(post_id)

    if request.method == 'POST' : 

        post.title = request.form.get('post_title')
        post.content = request.form.get('post_content')
        status = request.form.get('status')

        post.is_public = True if status == 'public' else False

        db.session.commit()

        flash('Post modified succesfully', 'success')
        return redirect(url_for('posts.manage_posts'))

    return render_template('/tasks/edit_posts.html', post = post)


### route to delete a post
@posts_bp.route('/delete/<int:post_id>')
def delete_post(post_id) : 

    post = Post.query.get(post_id)

    db.session.delete(post)
    db.session.commit()

    flash('Post deleted successfully', 'info')
    return redirect(url_for('posts.manage_posts'))

### route to delete all the posts
@posts_bp.route('/delete_all')
def delete_all() : 

    user_posts = Post.query.filter_by(user_id = current_user.id)

    user_posts.delete()
    db.session.commit()

    flash('Deleted all the posts', 'danger')

    return redirect(url_for('posts.manage_posts'))