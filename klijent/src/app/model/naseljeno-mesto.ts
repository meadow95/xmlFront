import { Drzava } from './drzava';
export class NaseljenoMesto {
  constructor(
    public naziv: string,
    public pttBroj: string,
    public drzava: Drzava,
    public id?: string
  ) { }
}
