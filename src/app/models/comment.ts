export interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export class Comment implements IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;

  constructor(data: IComment) {
    this.postId = data.postId;
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.body = data.body;
  }
}
