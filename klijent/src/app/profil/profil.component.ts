
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
  
  nkorisnik = new Korisnik('', '', '', '', '', '', [], [], []);

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
    if (this.nkorisnik.name === "") {
      this.nkorisnik.name = this.korisnik.name;
    }
    if (this.nkorisnik.surname === "") {
      this.nkorisnik.surname = this.korisnik.surname;
     }
     if(this.nkorisnik.email === ""){
       this.nkorisnik.email = this.korisnik.email;
     }
     if(this.nkorisnik.password === ""){
       this.nkorisnik.password = this.korisnik.password;
     }
  }
}




