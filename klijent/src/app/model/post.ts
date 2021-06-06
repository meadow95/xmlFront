import { Komentar } from "./komentar";

export class Post {
    constructor(
      public id: string,
      public identificationNum: string,
      public likes: number,
      public dislikes: number,
      public location: String,
      public description: String,
      public user: String,
      public tags: String[],
      public picture?: String,
      public pic?: String,
      public comments?: Komentar[],
      
    ) { }
  }