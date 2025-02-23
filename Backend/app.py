from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models.todoModal import db
from routes.todoRoute import task_bp
from dotenv import load_dotenv
import os

load_dotenv()
app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']=os.getenv('DATABASE_URL')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db.init_app(app)
app.register_blueprint(task_bp)

#initialize db
with app.app_context():
    db.create_all()

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)