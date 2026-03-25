from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextAreaField, SubmitField
from wtforms.validators import Email, Length, DataRequired


### creating the webform
class RegistrationForm(FlaskForm) : 

    name = StringField("Full Name", validators = [DataRequired()])
    email = StringField('Email', validators = [DataRequired(), Email()])
    password = PasswordField('Password', validators = [DataRequired(), Length(min = 6)])
    submit = SubmitField('Submit')
    