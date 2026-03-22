from flask import request, Response, url_for, session, redirect, Flask, render_template

app = Flask(__name__)
app.secret_key = 'secret'


valid_users = {
    'utsav' : '123',
    'bob' : '123',
    'joe' : 'joe123'
}



### main home page (login page) directory
@app.route('/', methods = ['GET', 'POST'])
def login() : 

    if request.method == 'POST' : 

        ### getting the username and password from the form
        username = request.form.get('username')
        password = request.form.get('password')

        ### printing into the terminal to make sure that it's working
        print(f"{username} :: {password}")

        if username in valid_users.keys() and password == valid_users[username]: 
            session['user'] = username ### store into the session
            return redirect(url_for('welcome'))

        else : 
            return render_template('login.html', error = 'Invalid credentials')

    return render_template('login.html')

### welcome page (after successful login)
@app.route('/welcome')
def welcome() : 

    if 'user' in session :
        return render_template('welcome.html', user = session['user'])

    else : 
        return redirect(url_for('login'))
    

### logout page
@app.route('/logout')
def logout() : 

    session.pop('user', None)
    return redirect(url_for('login'))


### info page to show the other users name as well
@app.route('/info')
def info() : 

    return render_template('info.html', users = valid_users.keys())


### adding the function for the users to register their password and username
@app.route('/register', methods = ['GET', 'POST'])
def register() : 

    if request.method == 'POST' : 

        username = request.form.get('username')
        password = request.form.get('password')

        if username in valid_users.keys and password == valid_users[username] : 
            return render_template('register.html', error = 'Already registered!')
        
        else : 
            valid_users.update({username : password})
            return render_template('register.html', message = 'successfully registered!')
        
    return render_template('register.html')


