from flask import Flask, render_template

app = Flask(__name__)

@app.route("/home",methods=['POST','GET'])

def upload_video():
    return render_template("second.js")

app.run()