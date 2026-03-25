from flask import request, Response, url_for, session, redirect, Flask, render_template, flash
from forms import RegistrationForm

app = Flask(__name__)
app.secret_key = 'secret'


### setting up the registration page
@app.route('/register2', methods = ['GET', 'POST'])
def register2() : 

    form = RegistrationForm()

    if form.validate_on_submit() : 

        name = form.name.data
        email = form.email.data

        flash(f"Welcome {name}, you have registered successfully", "success")

        return redirect(url_for('success'))
    
    return render_template('register2.html', form = form)

@app.route('/success')
def success() : 

    return render_template('success.html')