from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from models.todoModal import db
from routes.todoRoute import task_bp

app=Flask(__name__)
CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']="postgresql://postgres:postgres@db:5432/todo_db"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS']=False

db.init_app(app)
app.register_blueprint(task_bp)

#initialize db
@app.before_forst_request
def create_tables():
    db.create_all() 

if __name__=="__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)