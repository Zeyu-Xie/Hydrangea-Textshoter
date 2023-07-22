from flask import Flask, request, send_file, render_template
import warnings
from flask_socketio import SocketIO
from flask_cors import CORS

from textshoter import textshoter

warnings.filterwarnings("ignore")

PORT = 15371

app = Flask(__name__)

socketio = SocketIO(app, cors_allowed_origins='*')
CORS(app, origins="*")


@app.route("/textshoter/api/submitText", methods=["POST"])
def submitText():
    marginX = request.args.get("marginX")
    marginY = request.args.get("marginY")
    fontSize = request.args.get("fontSize")
    lineSpace = request.args.get("lineSpace")
    width = request.args.get("width")
    color = request.args.get("color")

    str_ = request.json["q"]

    print(str_)

    textshoter(int(marginX), int(marginY), int(
        fontSize), int(lineSpace), int(width), color, str_)
    return {"ok": "1"}

@app.route("/textshoter/api/downloadImage")
def downloadImage():
    res=send_file("static/textshoter.jpeg")
    res.headers["Content-Disposition"]="attachment; filename=textshoter.jpeg"
    return res

@app.route("/textshoter")
def page():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(port=PORT)
