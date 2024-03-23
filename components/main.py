from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/second",methods=['POST','GET'])

def upload_video():
    if request.method == "POST":
        print(request.files)
        image = request.files['file']
    return render_template("second.js")

app.run()