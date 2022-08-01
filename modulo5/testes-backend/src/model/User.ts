import { CustomError } from "../error/CustomError";

export class User {
    constructor(
      private id: string,
      private name: string,
      private email: string,
      private password: string,
      private role: string
    ) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.password = password
      this.role = role;
    }
    public getId(){
      return this.id
    }
    public getName(){
      return this.name
    }
    public getEmail(){
      return this.email
    }
    public getPassword(){ 
      return this.password
    }
    public getRole(){ 
      return this.role
    }
  
  
    static toUserModel(data: any): User {
      return new User(data.id, data.name, data.email, data.password,data.role)
    }

  }

  export const stringToUserRole = (input: string): USER_ROLES => {
    switch (input) {
       case "NORMAL":
          return USER_ROLES.NORMAL;
       case "ADMIN":
          return USER_ROLES.ADMIN;
       default:
          throw new CustomError(422, "Invalid user role");
    }
 };
 
 export enum USER_ROLES {
    NORMAL = "NORMAL",
    ADMIN = "ADMIN",
 }
 