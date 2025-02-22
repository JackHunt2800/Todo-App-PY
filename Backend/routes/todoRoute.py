from flask import Blueprint, request, jsonify
from models.todoModal import db, Task

task_bp = Blueprint("task_bp", __name__)

@task_bp.route("/tasks", methods=["GET"])
def get_tasks():
    try:
      tasks = Task.query.filter_by(completed=False).order_by(Task.created_at.desc()).limit(5).all()
      return jsonify([{ "id": t.id, "title": t.title, "description": t.description, "completed": t.completed } for t in tasks])
    except Exception as e:
      return jsonify({"message": "Error retrieving data"}), 500

@task_bp.route("/createTodo", methods=["POST"])
def create_task():
    try:
      data = request.json
      task = Task(title=data["title"], description=data.get("description", ""))
      db.session.add(task)
      db.session.commit()
      return jsonify({"message": "Task created successfully!"}), 201
    except Exception as e:
      return jsonify({"message": "Error creating task"}), 500

@task_bp.route("/deleteTodo/<int:id>", methods=["DELETE"])
def complete_task(id):
    try:
      task = Task.query.get_or_404(id)
      if task:
         db.session.delete(task)
         db.session.commit()
         return jsonify({"message": "Task marked as completed!"})
      return jsonify(jsonify({'message': 'task not found'}), 404)
    except Exception as e:
      return jsonify({"message": "Error completing task"}), 500
