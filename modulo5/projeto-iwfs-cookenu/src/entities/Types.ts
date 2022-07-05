export class User {
  constructor(
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password;
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


  static toUserModel(data: any): User {
    return new User(data.id, data.name, data.email, data.password)
  }
}

export class Recipe {
    constructor(
      private id: string,
      private title: string,
      private description: string,
      private preparation_mode: string,
      private date_creation:string,
      private creator_id: string
    ) {
      this.id = id;
      this.title= title;
      this.description = description;
      this.date_creation = date_creation;
      this.preparation_mode = preparation_mode;
      this.creator_id = creator_id;
    }
    public getId(){
      return this.id
    }
    public getTitle(){
      return this.title
    }
    public getDescription(){
      return this.description
    }
    public getDateCreation(){ 
      return this.date_creation
    }
    public getPreparationMode(){ 
        return this.preparation_mode
      }
      public getCreatorId(){ 
        return this.creator_id
      }
  
    static toUserModel(data: any): Recipe {
      return new Recipe(data.id, data.title, data.description, data.preparation_mode, data.date_creation, data.creator_id)
    }
  }