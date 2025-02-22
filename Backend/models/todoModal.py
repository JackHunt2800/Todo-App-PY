from flask_sqlalchemy import SQLAlchemy

db=SQLAlchemy()

class Task(db.Modal):
  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String(200), nullable=False)
  description = db.Column(db.Text, nullable=True)
  completed = db.Column(db.Boolean, default=False)
  created_at = db.Column(db.DateTime, server_default=db.func.now())