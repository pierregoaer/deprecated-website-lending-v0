from flask import Flask, render_template, request, redirect, url_for, send_from_directory, jsonify, make_response
from flask_cors import CORS, cross_origin
import json

from get_data import blog_data

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/get-blogs')
@cross_origin()
def get_blogs():
    print("requesting blogs")
    return jsonify(blog_data), 200


if __name__ == "__main__":
    app.run(host="127.0.0.1", debug=True)
