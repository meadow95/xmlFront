import { Post } from '../model/post';
import { Poruka } from './../model/poruka';

export class Korisnik {
  constructor(
    public username: string,
    public ime: string,
    public prezime: string,
    public email: string,
    public password: string,
    public brtel: string,
    public adresa: string,
    public pmb: string,
    public primljene_poruke: Array<Poruka>,
    public poslate_poruke: Array<Poruka>,
    public pratioci: Array<Korisnik>,
    public pratim: Array<Korisnik>,
    public postovi: Array<Post>,
    public id?: string
  ) { }
}
