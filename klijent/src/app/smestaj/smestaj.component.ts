import { Router } from '@angular/router';
import { AlertService } from './../alert/alert.service';
import { TokenStorage } from './../login-core/token-storage';
import { SmestajService } from './smestaj.service';

import { Korisnik } from './../korisnik/korisnik';

import { NaseljenoMesto } from './../model/naseljeno-mesto';
import { Component, OnInit } from '@angular/core';
import { Smestaj } from './smestaj';
import { KorisnikService } from '../korisnik/korisnik.service';

@Component({
  selector: 'app-smestaj',
  templateUrl: './smestaj.component.html',
  styleUrls: ['./smestaj.component.css']
})
export class SmestajComponent implements OnInit {
  smestaj: Smestaj[];
  model: any = {};
  detaljno = false;
  rezultati = false;
 
  izabraniTipovi = [];
  izabraneKategorije = [];
  izabraneDodatne = [];
  datumi = [];
  cena: number;
  date1: Date;
  date2: Date;
  cene = [];
  username: string;
  profil: Korisnik;

  constructor(
    private smestajService: SmestajService,
    private korisnikService: KorisnikService,
    private token: TokenStorage,
    private alertService: AlertService,
    private router: Router
  ) {}

  ngOnInit() {

     this.smestajService.getSmestaje().subscribe(data => {
      this.smestaj = data;
      this.rezultati = true;
     });

     
  }

  OnSubmit(){

    this.korisnikService.getKorisnikByUsername(this.username).subscribe(data => {

      this.profil = data;
    });

  }

  profilClick(korisnik: Korisnik){

    this.korisnikService.username = korisnik.username;

  }

  search() {
   

 this.korisnikService.getKorisnikByUsername(this.username).subscribe(data => {

  this.profil = data;
});
}
}