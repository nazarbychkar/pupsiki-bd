import json
import mysql.connector
import base64

class Users:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host="localhost",user="root",password="12345",database='pupsiki')
            self.cur = self.con.cursor(dictionary=True)
            self.con.autocommit = True
            print(" * Successful connection!!!")
        except:
            print(" * Failed connection!!!")
    

    def get_all_users(self):
        self.cur.execute("SELECT * FROM user")
        result = self.cur.fetchall()

        if not (self.cur.rowcount > 0):
            result = {"message":"There is no user", "error": "Not Found", "status code": 404}
        
        return result


    def get_user_by_id(self,id):
        if (not str(id).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400}
        self.cur.execute(f"SELECT * FROM user where id={id}")
        result = self.cur.fetchall()

        if not (self.cur.rowcount > 0):
            result = {"message":"There is no user with such id", "error": "Not Found", "status code": 404}
    
        return result


    def add_user(self, data):
        data = dict(data)
        return_value = ""
        if (len(data) == 4):
            try:
                self.cur.execute(f"SELECT id FROM user")
                user_id = self.cur.fetchall()
                user_id = int(user_id[-1]["id"] + 1)

                self.cur.execute(f"INSERT INTO user (id, email, isBanned, password, username) values('{user_id}', '{data["email"]}', '{data["isBanned"]}', '{data["password"]}', '{data["username"]}')")

                return_value = {"message":"Successfully added to database", "status code": 200}
            except:
                return_value = {"message":"There is already user with such email or login", "error": "Conflict", "status code": 409}
        else:
            return_value = {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400}
            
        return return_value

    def update_user(self,data):
        if(len(dict(data)) != 5):
            return {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400}

        if(not str(dict(data)["id"]).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400}
        result = "Invalid data"
        data = dict(data)

        try:
            self.cur.execute(f"UPDATE user SET username='{data["username"]}', email='{data["email"]}', password='{data["password"]}', isBanned='{data["isBanned"]}' WHERE id={data["id"]}")
            
            if (self.cur.rowcount == 0):
                result = {"message":"Nothing to update", "error": "Not Found", "status code": 404}
            else:
                result = {"message":"Updated successfully", "status code": 200}
        except:
            result = {"message":"There is already user with such email or login", "error": "Conflict", "status code": 409}

        return result


    def delete_user(self,id):

        if(not str(id).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400}

        self.cur.execute(f"DELETE FROM user WHERE id={id}")
        
        if(self.cur.rowcount == 0 ):
            result = {"message":"Nothing to delete", "error": "Not Found", "status code": 404}
        else:
            result = {"message":"User was successfully deleted", "status code": 204}

        return result
    
    def ban_user(self,id):
        try:
            self.cur.execute(f"UPDATE user SET isBanned='1' WHERE id={id}")
            
            if (self.cur.rowcount == 0):
                result = {"message":"Nothing to update", "error": "Not Found", "status code": 404}
            else:
                result = {"message":"Updated successfully", "status code": 200}
        except:
            result = {"message":"Something went wrong", "error": "Conflict", "status code": 409}

        return result
    
    def unban_user(self,id):
        try:
            self.cur.execute(f"UPDATE user SET isBanned='0' WHERE id={id}")
            
            if (self.cur.rowcount == 0):
                result = {"message":"Nothing to update", "error": "Not Found", "status code": 404}
            else:
                result = {"message":"Updated successfully", "status code": 200}
        except:
            result = {"message":"Something went wrong", "error": "Conflict", "status code": 409}

        return result
    

    def add_to_project_user(self, data):
        """
        json to send:
        {
            role_id: 1,
            user_id: 2,
            team_id: 3
        }
        """
        data = dict(data)
        return_value = ""
        if not (len(data) == 3):
            return {"message":"Invalid amount of keys", "error": "Bad Request", "status code": 400}

        self.cur.execute(f"SELECT * FROM role WHERE id={data['role_id']}")
        return_value = self.cur.fetchall()
        if (self.cur.rowcount == 0):
            return {"message":"Unknown role", "error": "Not Found", "status code": 404}

        self.cur.execute(f"SELECT * FROM user WHERE id={data['user_id']}")
        return_value = self.cur.fetchall()
        if (self.cur.rowcount == 0):
            return {"message":"Unknown user", "error": "Not Found", "status code": 404}
        
        self.cur.execute(f"SELECT * FROM team WHERE id={data['team_id']}")
        return_value = self.cur.fetchall()
        if (self.cur.rowcount == 0):
            return {"message":"Unknown team", "error": "Not Found", "status code": 404}

        try:
            self.cur.execute(f"SELECT id FROM participant")
            participant_id = self.cur.fetchall()
            participant_id = int(participant_id[-1]["id"] + 1)

            self.cur.execute(f"INSERT INTO participant (id, role_id, user_id, team_id) values('{participant_id}', '{data["role_id"]}', '{data["user_id"]}', '{data["team_id"]}')")

            return_value = {"message":"Successfully added to database", "status code": 200}
        except:
            return_value = {"message":"There is already user with such team or role", "error": "Conflict", "status code": 409}
        
        return return_value
    
    def delete_from_project_user(self, id):
        if(not str(id).isdigit()):
            return {"message":"Invalid user id", "error": "Bad Request", "status code": 400}

        self.cur.execute(f"DELETE FROM participant WHERE id={id}")
        
        if(self.cur.rowcount == 0 ):
            result = {"message":"Nothing to delete", "error": "Not Found", "status code": 404}
        else:
            result = {"message":"User was successfully deleted", "status code": 204}

        return result