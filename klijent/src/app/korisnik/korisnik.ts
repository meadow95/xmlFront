import { Post } from '../model/post';
import { Poruka } from './../model/poruka';

export class Korisnik {
  constructor(
    public username: string,
    public name: string,
    public surname: string,
    public email: string,
    public password: string,
    public privateprofile: string,
    public followers: Array<Korisnik>,
    public following: Array<Korisnik>,
    public posts: Array<String>,
    public id?: string  
  ) { }
}
