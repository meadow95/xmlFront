import { Komentar } from './../model/komentar';

import { Korisnik } from './../korisnik/korisnik';
import { NaseljenoMesto } from './../model/naseljeno-mesto';

export class Smestaj {
  constructor(
    public naziv: string,
    public kapacitet: number,
    public naseljeno_mesto: NaseljenoMesto,
    public opis: string,
    public slika: string,
    
    public agent: Korisnik,
  
    public komentari: Array<Komentar>,
    public cena = 0,
    public id?: string
  ) { }
}
