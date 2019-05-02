from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
import sys
app = Flask(__name__)

@app.route('/')
def home():
    return render_template('home.html') 

@app.route('/black')
def black():
    return render_template('black.html') 

@app.route('/blue')
def blue():
    return render_template('blue.html')  

@app.route('/green')
def green():
    return render_template('green.html')  

@app.route('/quiz')
def quiz():
    return render_template('quiz.html')  

if __name__ == '__main__':
   app.run(debug = True)




