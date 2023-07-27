from flask import Flask, request, send_file, render_template
from flask_cors import CORS
from app.textshoter import textshoter
import json
import os

script_path = os.path.abspath(__file__)
script_directory = os.path.dirname(script_path)
config_path=os.path.join(script_directory,"config.json")
output_path=os.path.join(script_directory, "app", "output.jpeg")

config = {}
with open(config_path, "r") as config_file:
    config = json.load(config_file)

app = Flask(__name__, static_folder="static")

CORS(app, origins="*", resources="*")


@app.route("/textshoter/api/submitText", methods=["POST"])
def submitText():
    marginX = request.args.get("marginX")
    marginY = request.args.get("marginY")
    fontSize = request.args.get("fontSize")
    lineSpace = request.args.get("lineSpace")
    width = request.args.get("width")
    color = request.args.get("color")

    str_ = request.json["q"]

    textshoter(int(marginX), int(marginY), int(
        fontSize), int(lineSpace), int(width), color, str_)
    return {"ok": "1"}


@app.route("/textshoter/api/downloadImage")
def downloadImage():
    res = send_file(output_path)
    res.headers["Content-Disposition"] = "attachment; filename=output.jpeg"
    return res


@app.route("/textshoter")
def page():
    return render_template("index.html")


if __name__ == "__main__":
    app.run(host=config["host"], port=config["port"])
