import { Poruka } from './../model/poruka';
import { KorisnikService } from './../korisnik/korisnik.service';
import { TokenStorage } from './../login-core/token-storage';
import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik/korisnik';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-poruke',
  templateUrl: './poruke.component.html',
  styleUrls: ['./poruke.component.css']
})
export class PorukeComponent implements OnInit {

  primljene_poruke: Poruka[];
  poslate_poruke: Poruka[];

  constructor(
    private token: TokenStorage,
    private korisnikService: KorisnikService
  ) { }

  ngOnInit() {
    this.korisnikService.getKorisnik(jwt_decode(this.token.getToken())).subscribe(
      data => {

      }
    );
  }

}
