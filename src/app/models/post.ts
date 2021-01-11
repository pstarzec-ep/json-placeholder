export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export class Post implements IPost {
  userId: number;
  id: number;
  title: string;
  body: string;

  constructor(data: IPost) {
    this.userId = data.userId;
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
  }
}
