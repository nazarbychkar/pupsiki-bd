from app import app
from users_model import Users
from flask import request

users = Users()


@app.route("/users")
def get_all_users():
    return users.get_all_users()


@app.route("/user/<id>")
def get_user_by_id(id):
    return users.get_user_by_id(id)


@app.route("/user/add", methods=["POST"])
def add_user():
    return users.add_user(request.form)


@app.route("/user/update", methods=["PUT"])
def update_user():
    return users.update_user(request.form)


@app.route("/user/delete/<id>", methods=["DELETE"])
def delete_user(id):
    return users.delete_user(id)


@app.route("/user/ban/<id>", methods=["PATCH"])
def ban_user(id):
    return users.ban_user(id)


@app.route("/user/unban/<id>", methods=["PATCH"])
def unban_user(id):
    return users.unban_user(id)


@app.route("/user/add/project", methods=["POST"])
def add_to_project_user():
    return users.add_to_project_user(request.form)


@app.route("/user/delete/project/<id>", methods=["DELETE"])
def delete_from_project_user(id):
    return users.delete_from_project_user(id)
