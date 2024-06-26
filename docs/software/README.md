# Реалізація інформаційного та програмного забезпечення

В рамках проекту розробляється:

## SQL-скрипт для створення та початкового наповнення бази даних

_pupsiki.sql_

```sql
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema pupsiki
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `pupsiki` ;

-- -----------------------------------------------------
-- Schema pupsiki
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pupsiki` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `pupsiki` ;

-- -----------------------------------------------------
-- Table `pupsiki`.`permission`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`permission` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`permission` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`role`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`role` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`role` (
  `id` INT NOT NULL,
  `name` VARCHAR(100) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`grant1`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`grant1` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`grant1` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `permission_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_grant1_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_grant1_permission1_idx` (`permission_id` ASC) VISIBLE,
  CONSTRAINT `fk_grant1_permission1`
    FOREIGN KEY (`permission_id`)
    REFERENCES `pupsiki`.`permission` (`id`),
  CONSTRAINT `fk_grant1_role1`
    FOREIGN KEY (`role_id`)
    REFERENCES `pupsiki`.`role` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`label`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`label` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`label` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`project`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`project` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`project` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `status` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`team`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`team` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`team` (
  `id` INT NOT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_team_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_team_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `pupsiki`.`project` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`user` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(100) NULL DEFAULT NULL,
  `email` VARCHAR(100) NULL DEFAULT NULL,
  `password` VARCHAR(100) NULL DEFAULT NULL,
  `isBanned` TINYINT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`participant`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`participant` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`participant` (
  `id` INT NOT NULL,
  `role_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `team_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_participant_role1_idx` (`role_id` ASC) VISIBLE,
  INDEX `fk_participant_user1_idx` (`user_id` ASC) VISIBLE,
  INDEX `fk_participant_team1_idx` (`team_id` ASC) VISIBLE,
  CONSTRAINT `role_id`
    FOREIGN KEY (`role_id`)
    REFERENCES `pupsiki`.`role` (`id`),
  CONSTRAINT `team_id`
    FOREIGN KEY (`team_id`)
    REFERENCES `pupsiki`.`team` (`id`),
  CONSTRAINT `user_id`
    FOREIGN KEY (`user_id`)
    REFERENCES `pupsiki`.`user` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`sprint`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`sprint` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`sprint` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(500) NULL DEFAULT NULL,
  `starttime` TIMESTAMP(6) NULL DEFAULT NULL,
  `deadline` TIMESTAMP(6) NULL DEFAULT NULL,
  `project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_sprint_project1_idx` (`project_id` ASC) VISIBLE,
  CONSTRAINT `fk_sprint_project1`
    FOREIGN KEY (`project_id`)
    REFERENCES `pupsiki`.`project` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`task`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`task` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`task` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `description` VARCHAR(100) NULL DEFAULT NULL,
  `status` VARCHAR(100) NULL DEFAULT NULL,
  `deadline` TIMESTAMP(6) NULL DEFAULT NULL,
  `sprint_id` INT NOT NULL,
  `sprint_project_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_task_sprint1_idx` (`sprint_id` ASC, `sprint_project_id` ASC) VISIBLE,
  CONSTRAINT `fk_task_sprint1`
    FOREIGN KEY (`sprint_id`)
    REFERENCES `pupsiki`.`sprint` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`review`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`review` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`review` (
  `id` INT NOT NULL,
  `title` VARCHAR(100) NULL DEFAULT NULL,
  `task_id` INT NOT NULL,
  `participant_id` INT NOT NULL,
  `review_id` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_review_task_idx` (`task_id` ASC) VISIBLE,
  INDEX `fk_review_participant1_idx` (`participant_id` ASC) VISIBLE,
  INDEX `fk_review_review1_idx` (`review_id` ASC) VISIBLE,
  CONSTRAINT `fk_review_participant1`
    FOREIGN KEY (`participant_id`)
    REFERENCES `pupsiki`.`participant` (`id`),
  CONSTRAINT `fk_review_review1`
    FOREIGN KEY (`review_id`)
    REFERENCES `pupsiki`.`review` (`id`),
  CONSTRAINT `fk_review_task`
    FOREIGN KEY (`task_id`)
    REFERENCES `pupsiki`.`task` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `pupsiki`.`tag`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pupsiki`.`tag` ;

CREATE TABLE IF NOT EXISTS `pupsiki`.`tag` (
  `id` INT NOT NULL,
  `label_id` INT NOT NULL,
  `task_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tag_label1_idx` (`label_id` ASC) VISIBLE,
  INDEX `fk_tag_task1_idx` (`task_id` ASC) VISIBLE,
  CONSTRAINT `fk_tag_label1`
    FOREIGN KEY (`label_id`)
    REFERENCES `pupsiki`.`label` (`id`),
  CONSTRAINT `fk_tag_task1`
    FOREIGN KEY (`task_id`)
    REFERENCES `pupsiki`.`task` (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pupsiki`.`permission`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`permission` (`id`, `name`) VALUES (1, 'See-only');
INSERT INTO `pupsiki`.`permission` (`id`, `name`) VALUES (2, 'Edit');
INSERT INTO `pupsiki`.`permission` (`id`, `name`) VALUES (3, 'Delete');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`role`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (1, 'Front-end');
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (2, 'Back-end');
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (3, 'Tester');
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (4, 'Manager');
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (5, 'Team Lead');
INSERT INTO `pupsiki`.`role` (`id`, `name`) VALUES (6, 'Designer');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`grant1`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`grant1` (`id`, `role_id`, `permission_id`) VALUES (1, 6, 2);
INSERT INTO `pupsiki`.`grant1` (`id`, `role_id`, `permission_id`) VALUES (2, 4, 3);
INSERT INTO `pupsiki`.`grant1` (`id`, `role_id`, `permission_id`) VALUES (3, 2, 2);
INSERT INTO `pupsiki`.`grant1` (`id`, `role_id`, `permission_id`) VALUES (4, 1, 1);
INSERT INTO `pupsiki`.`grant1` (`id`, `role_id`, `permission_id`) VALUES (5, 3, 1);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`label`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`label` (`id`, `title`) VALUES (1, 'important');
INSERT INTO `pupsiki`.`label` (`id`, `title`) VALUES (2, 'easy');
INSERT INTO `pupsiki`.`label` (`id`, `title`) VALUES (3, 'hard');
INSERT INTO `pupsiki`.`label` (`id`, `title`) VALUES (4, 'short-term');
INSERT INTO `pupsiki`.`label` (`id`, `title`) VALUES (5, 'redudant');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`project`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`project` (`id`, `title`, `status`, `description`) VALUES (1, 'Android App', 'in progress', 'A small android app.');
INSERT INTO `pupsiki`.`project` (`id`, `title`, `status`, `description`) VALUES (2, 'Web Site', 'done', 'A web site for a product placement.');
INSERT INTO `pupsiki`.`project` (`id`, `title`, `status`, `description`) VALUES (3, 'Server', 'not initialized', 'A server within linux.');
INSERT INTO `pupsiki`.`project` (`id`, `title`, `status`, `description`) VALUES (4, 'Presentation', 'in progress', 'A presentation on a particular subject.');
INSERT INTO `pupsiki`.`project` (`id`, `title`, `status`, `description`) VALUES (5, 'UI for platform', 'not initialized', 'An UI for the whole platform.');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`team`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`team` (`id`, `project_id`) VALUES (1, 1);
INSERT INTO `pupsiki`.`team` (`id`, `project_id`) VALUES (2, 1);
INSERT INTO `pupsiki`.`team` (`id`, `project_id`) VALUES (4, 2);
INSERT INTO `pupsiki`.`team` (`id`, `project_id`) VALUES (3, 3);
INSERT INTO `pupsiki`.`team` (`id`, `project_id`) VALUES (5, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`user`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (1, 'steve07', 'steve07@gmail.com', 'steve0712', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (2, 'marry', 'marry@yahoo.com', 'marry123445', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (3, 'john33', 'john3@gmail.com', 'jonasd', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (4, 'super2', 'super2@email.com', 'super2super2super2super2', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (5, 'owayloon', 'owayloon@gmail.com', 'owayloon21', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (6, 'jerry', 'jeryy@jerry.org', '12345', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (7, 'bigboss', 'bigboss@gmail.com', 'BigBoss12', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (8, 'highallthetime', 'bob@marley.com', 'klasjd', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (9, 'ye', 'kan@ye.com', 'kanye', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (10, 'miserable12', 'cry@home.com', '121212', 1);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (11, 'bob12', 'years@home.com', '333asdaAS', 0);
INSERT INTO `pupsiki`.`user` (`id`, `username`, `email`, `password`, `isBanned`) VALUES (12, '1admin1', 'notadmin@home.com', 'asdeAD@!!#1', 0);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`participant`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`participant` (`id`, `role_id`, `user_id`, `team_id`) VALUES (1, 3, 6, 1);
INSERT INTO `pupsiki`.`participant` (`id`, `role_id`, `user_id`, `team_id`) VALUES (2, 2, 5, 2);
INSERT INTO `pupsiki`.`participant` (`id`, `role_id`, `user_id`, `team_id`) VALUES (3, 1, 4, 1);
INSERT INTO `pupsiki`.`participant` (`id`, `role_id`, `user_id`, `team_id`) VALUES (4, 2, 3, 1);
INSERT INTO `pupsiki`.`participant` (`id`, `role_id`, `user_id`, `team_id`) VALUES (5, 3, 2, 2);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`sprint`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`sprint` (`id`, `title`, `description`, `starttime`, `deadline`, `project_id`) VALUES (1, 'Code the main concept', 'Code the main concept of an app.', '2024-12-12 00:00:00.000000', '2025-12-01 00:00:00.000000', 1);
INSERT INTO `pupsiki`.`sprint` (`id`, `title`, `description`, `starttime`, `deadline`, `project_id`) VALUES (2, 'Desing the style for the app', 'Desing the style for the app.', '2024-03-14 00:00:00.000000', '2025-12-01 00:00:00.000000', 1);
INSERT INTO `pupsiki`.`sprint` (`id`, `title`, `description`, `starttime`, `deadline`, `project_id`) VALUES (3, 'Deploy the project', 'Deploy the project and adjust it.', '2024-04-12 00:00:00.000000', '2025-12-01 00:00:00.000000', 3);
INSERT INTO `pupsiki`.`sprint` (`id`, `title`, `description`, `starttime`, `deadline`, `project_id`) VALUES (4, 'Develop the main concept', 'Develop the main concept for the project.', '2024-04-04 00:00:00.000000', '2025-12-01 00:00:00.000000', 2);
INSERT INTO `pupsiki`.`sprint` (`id`, `title`, `description`, `starttime`, `deadline`, `project_id`) VALUES (5, 'Set up a Google Analytics', 'Set up a Google Analytics for the data collecting', '2024-10-12 00:00:00.000000', '2025-12-01 00:00:00.000000', 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`task`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`task` (`id`, `title`, `description`, `status`, `deadline`, `sprint_id`, `sprint_project_id`) VALUES (1, 'Refactor code', 'Refactor a small portion of a code', 'done', '2024-06-13 00:00:00.000000', 2, 1);
INSERT INTO `pupsiki`.`task` (`id`, `title`, `description`, `status`, `deadline`, `sprint_id`, `sprint_project_id`) VALUES (2, 'Clean the server', 'Clean the server from redudant data', 'in progress', '2024-06-01 00:00:00.000000', 2, 1);
INSERT INTO `pupsiki`.`task` (`id`, `title`, `description`, `status`, `deadline`, `sprint_id`, `sprint_project_id`) VALUES (3, 'Commit', 'Commit these changes to the main', 'not initialized', '2024-06-25 00:00:00.000000', 3, 3);
INSERT INTO `pupsiki`.`task` (`id`, `title`, `description`, `status`, `deadline`, `sprint_id`, `sprint_project_id`) VALUES (4, 'Conflict', 'Deal with the conflict in the main branch', 'not initialized', '2024-07-25 00:00:00.000000', 4, 2);
INSERT INTO `pupsiki`.`task` (`id`, `title`, `description`, `status`, `deadline`, `sprint_id`, `sprint_project_id`) VALUES (5, 'Deploy', 'Deploy app to the server', 'in progress', '2024-06-14 00:00:00.000000', 5, 4);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`review`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`review` (`id`, `title`, `task_id`, `participant_id`, `review_id`) VALUES (1, 'Dull design', 3, 1, NULL);
INSERT INTO `pupsiki`.`review` (`id`, `title`, `task_id`, `participant_id`, `review_id`) VALUES (2, 'Good perfomance', 2, 2, 1);
INSERT INTO `pupsiki`.`review` (`id`, `title`, `task_id`, `participant_id`, `review_id`) VALUES (3, 'Refactoring made it worse', 1, 4, 1);
INSERT INTO `pupsiki`.`review` (`id`, `title`, `task_id`, `participant_id`, `review_id`) VALUES (4, 'Exelent job', 2, 3, 2);
INSERT INTO `pupsiki`.`review` (`id`, `title`, `task_id`, `participant_id`, `review_id`) VALUES (5, 'Nor bad, nor good', 3, 1, NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pupsiki`.`tag`
-- -----------------------------------------------------
START TRANSACTION;
USE `pupsiki`;
INSERT INTO `pupsiki`.`tag` (`id`, `label_id`, `task_id`) VALUES (1, 3, 2);
INSERT INTO `pupsiki`.`tag` (`id`, `label_id`, `task_id`) VALUES (2, 2, 4);
INSERT INTO `pupsiki`.`tag` (`id`, `label_id`, `task_id`) VALUES (3, 1, 3);
INSERT INTO `pupsiki`.`tag` (`id`, `label_id`, `task_id`) VALUES (4, 4, 5);
INSERT INTO `pupsiki`.`tag` (`id`, `label_id`, `task_id`) VALUES (5, 3, 1);

COMMIT;
```

## RESTfull сервіс для управління даними

__app.py__:
```python
from flask import Flask

app = Flask(__name__)

from users_controller import *
```

__users_controller.py__:
```python
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
```

__users_model.py__:
```python
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
```