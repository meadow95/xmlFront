import { Komentar } from "./komentar";

export class Post {
    constructor(
      public id: string,
      public likes: number,
      public dislikes: number,
      public lokacija: String,
      public opis: String,
      public slike: String[],
      public korisnik: String,
      public komentari: Komentar[]
      
    ) { }
  }