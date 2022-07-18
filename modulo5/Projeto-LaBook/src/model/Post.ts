export enum POST_TYPE {
  normal = "NORMAL",
  evento = "EVENTO",
}

export class Post {
  constructor(
    private id: string,
    private photo: string,
    private description: string,
    private date_creation: string,
    private type: POST_TYPE,
    private author_id: string
  ) {}

  public getId() {
    return this.id;
  }
  public getPhoto() {
    return this.photo;
  }
  public getDescription() {
    return this.description;
  }
  public getDateCreation() {
    return this.date_creation;
  }
  public getType() {
    return this.type;
  }
  public getAuthorId() {
    return this.author_id;
  }

  static toPostModel(data: any): Post {
    return new Post(
      data.id,
      data.photo,
      data.description,
      data.date_creation,
      data.type,
      data.author_id
    );
  }
}
