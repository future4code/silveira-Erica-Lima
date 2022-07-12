import { postTableName } from "../model/Post";
import { userTableName } from "../model/User";
import { connection } from "../data/BaseDataBase";

connection
  .raw(
    `
          CREATE TABLE IF NOT EXISTS ${userTableName} (
              id  VARCHAR (255) PRIMARY KEY,
              name  VARCHAR (255) NOT NULL,
              email  VARCHAR (255) UNIQUE NOT NULL,
              password VARCHAR (255) NOT  NULL,
          );
          CREATE TABLE IF NOT EXISTS ${postTableName } (
              id  VARCHAR (255) PRIMARY KEY,
              photo  VARCHAR (255) NOT NULL,
              description  VARCHAR (255) NOT NULL,
              type ENUM("normal", "event) DEFAULT "normal",
              author_id VARCHAR (255),
              FOREIGN KEY (author_id) REFERENCES Labook_Users(id)
          );
      `
  )
  .then(() => console.log("MySql tables were successfully created!"))
  .catch((error) => console.log(error.message))
  .finally(()=>{
    connection.destroy()
  })
