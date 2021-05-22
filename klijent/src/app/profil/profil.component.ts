
import { AlertService } from './../alert/alert.service';
import { KorisnikService } from './../korisnik/korisnik.service';
import { Korisnik } from './../korisnik/korisnik';
import { Component, OnInit } from '@angular/core';
import { TokenStorage } from '../login-core/token-storage';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {


  korisnik: Korisnik;
  
  nkorisnik = new Korisnik('', '', '', '', '', '', '', '', [], [], [], [], []);

  constructor(
    private korisnikService: KorisnikService,
    private token: TokenStorage,
    private alertService: AlertService
  ) { }

  ngOnInit() {
    if (this.token.getToken() != null) {
      this.getUser();
    }
  }
  private isButtonVisible2 = false;

  getUser() {
    this.korisnikService.getKorisnik(jwt_decode(this.token.getToken())).subscribe(
      data => {
        this.korisnik = data;
      }
    );
  }
  change2(isButtonVisible2: boolean) {
    if (this.isButtonVisible2 == false)
      this.isButtonVisible2 = true;
    else this.isButtonVisible2 = false;

  }

  submitNewInfo() {
    this.isButtonVisible2 = false;
    if (this.nkorisnik.username === "") {
      this.nkorisnik.username = this.korisnik.username;
    }
    if (this.nkorisnik.ime === "") {
      this.nkorisnik.ime = this.korisnik.ime;
    }
    if (this.nkorisnik.prezime === "") {
      this.nkorisnik.prezime = this.korisnik.prezime;
     }
     if(this.nkorisnik.email === ""){
       this.nkorisnik.email = this.korisnik.email;
     }
     if(this.nkorisnik.password === ""){
       this.nkorisnik.password = this.korisnik.password;
     }
     if(this.nkorisnik.brtel === ""){
       this.nkorisnik.brtel = this.korisnik.brtel;
     }
  }
}




