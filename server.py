from flask import Flask, request, send_file
import warnings

from textshoter import textshoter

warnings.filterwarnings("ignore")

HOST = "127.0.0.1"
PORT = 15371

app = Flask(__name__)


@app.route("/textshoter/api")
def textshoter():
    marginX = request.args.get("marginX")
    marginY = request.args.get("marginY")
    fontSize = request.args.get("fontSize")
    lineSpace = request.args.get("lineSpace")
    width = request.args.get("width")
    color = request.args.get("color")
    textshoter(int(marginX), int(marginY), int(
        fontSize), int(lineSpace), int(width), color)
    return {"ok": "1"}

@app.route("textshoter")
def page():
    return send_file("./webpage/")

if __name__ == "__main__":
    app.run(port=PORT)
