from flask import Flask, render_template, request, jsonify
from email.message import EmailMessage
import smtplib

app = Flask(__name__)

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/illustrations")
def illustrations():
    return render_template("illustrations.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/sendemail/", methods=["POST"])
def send_email():
    try:
        name = request.form.get('firstName') + " " + request.form.get('lastName')
        subject = request.form.get('Subject')
        guest_email = request.form.get('guest_email')
        message = request.form.get('message')

        # Example email sending logic
        your_email = "artist.ivey.bot@gmail.com"
        your_password = "yatu etug xiko ythr"
        receiver_email = "artist.iversonruffin@gmail.com"

        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()
        server.login(your_email, your_password)

        email_message = EmailMessage()
        email_message.set_content(f"Name: {name}\nGuest Email: {guest_email}\nMessage: {message}")
        email_message["To"] = receiver_email
        email_message["From"] = your_email
        email_message["Subject"] = subject

        server.send_message(email_message)
        server.quit()

        # Return success response
        return jsonify({"status": "success", "message": "Email sent successfully!"})
    except Exception as e:
        # Return error response
        return jsonify({"status": "error", "message": str(e)})

if __name__ == "__main__":
    app.run(debug=True)
