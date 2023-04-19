from flask import Flask, request, jsonify, make_response
from flask_mail import Message, Mail
from flask_cors import CORS, cross_origin
from datetime import datetime
import os
from get_data import blog_data, gsheet_file

app = Flask(__name__)

app.config['SECRET_KEY'] = os.environ['APPCONFIGSECRETKEY']
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = os.environ["EMAIL_SENDER"]
app.config['MAIL_PASSWORD'] = os.environ["EMAIL_PASSWORD"]
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

# Initialize Mail after config setup
mail = Mail(app)

# TODO: Select proper origin for DEV or PROD
cors = CORS(app, resources={r'/*': {'origins': [os.environ['CORS_ORIGIN_DEV']]}})


# cors = CORS(app, resources={r'/*': {'origins': [os.environ['CORS_ORIGIN_PROD']]}})


@app.route('/get-blogs')
def get_blogs():
    return jsonify(blog_data), 200


@app.route('/contact', methods=['POST'])
def contact():
    # get contact form data
    form_data = request.get_json()
    name = form_data["name"]
    email = form_data["email"]
    phone = form_data["phone"]
    message = form_data["message"]
    today = datetime.today().strftime("%d/%m/%Y %H:%M:%S")

    # update google sheet
    contacts_worksheet = gsheet_file.worksheet("contacts")
    worksheet_rows = len(contacts_worksheet.get_all_values())
    new_data = [today, name, email, phone, message]
    for col in range(1, 6):
        contacts_worksheet.update_cell(worksheet_rows + 1, col, str(new_data[col - 1]))

    # send email notification
    html = f"Electricien Nîmes - Nouveau message!<br>" \
           f"<br>" \
           f"Date : {today}<br>" \
           f"Nom : {name}<br>" \
           f"Email : {email}<br>" \
           f"Téléphone : {phone}<br>" \
           f"Message : {message}<br><br>" \
           f"Voir https://docs.google.com/spreadsheets/d/1PDZtqhsUVgdv83s_uAGr3Z_ElT4_dfMtBocGqSq9SxM/edit#gid=330549784"
    msg = Message(
        subject='Electricien Nîmes - Nouveau message!',
        html=html,
        sender=('Contact - Electricien Nîmes', app.config['MAIL_USERNAME']),
        recipients=[os.environ["EMAIL_RECIPIENT_1"]]
    )
    mail.send(msg)
    return "success", 200


if __name__ == "__main__":
    # TODO: Select proper run for DEV or PROD
    app.run(host="127.0.0.1", debug=True)
    # app.run()
