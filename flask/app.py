from flask import Flask, request, abort, jsonify, send_from_directory, flash, redirect, url_for
from flask_cors import CORS

api = Flask(__name__)
CORS(api)

@api.route('/api/<text>')
def download_file(text):
    """ DESC
        :param username: DESC
        :type username: `Dictionary`
        
        :return: DESC
        :rtype: tuple
    """
    return text+text

if __name__ == "__main__":
    api.run(debug=True, port=8000)
