import { KorisnikService } from './../../korisnik/korisnik.service';
import { AlertService } from './../../alert/alert.service';
import { Komentar } from './../../model/komentar';
import { KomentarService } from './../../services/komentar.service';
import { SmestajComponent } from './../smestaj.component';
import { Smestaj } from './../smestaj';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SmestajService } from '../smestaj.service';
import { TokenStorage } from '../../login-core/token-storage';
import * as jwt_decode from 'jwt-decode';
import { Korisnik } from '../../korisnik/korisnik';



@Component({
  selector: 'app-detalji',
  templateUrl: './detalji.component.html',
  styleUrls: ['./detalji.component.css']
})

export class DetaljiComponent implements OnInit {
  smestajId: string;
  smestaj: Smestaj;
  date1: string;
  date2: string;
  koment: string;
  komentar: Komentar;
  ime: string;
  korisnik: Korisnik;
  
  dopustenKomentar = false;

  constructor(
    private route: ActivatedRoute,
    private smestajService: SmestajService,
    private komentarService: KomentarService,
    private token: TokenStorage,
    private alertService: AlertService,
    private router: Router,
    private korisnikService: KorisnikService,
    
    ) {}

  ngOnInit() {
    if (this.route.snapshot.params['smestajId']) {
      this.route.params.subscribe((params: Params) => {
        this.smestajId = params['smestajId'];
        this.getSmestaj(this.smestajId);
        this.date1 = localStorage.getItem('date1');
        this.date2 = localStorage.getItem('date2');
      });
    }
    if (this.token.getToken() !== null) {
      this.korisnikService.getKorisnik(jwt_decode(this.token.getToken())).subscribe(
        data => {
          this.korisnik = data;
          
        }
      );
    }
  }

  getSmestaj(id: string) {
    this.smestajService.getSmestaj(id).subscribe(
      data => {
        this.smestaj = data;
        this.smestaj.cena = Number(localStorage.getItem(this.smestajId));
      }
    );
  }

  addComment() {
    if (this.token.getToken() === null) {
      this.alertService.error('Morate biti ulogovani da bi postavili komentar', true);
      this.router.navigate(['login']);
    } else {
      this.sendKomentar();
      (<HTMLInputElement>document.getElementById('txtarea')).value = '';
      this.alertService.success('Komentar je poslat na odobravanje');
    }
  }


  sendKomentar() {
    this.korisnikService.getKorisnik(jwt_decode(this.token.getToken())).subscribe(
      data => {
        this.ime = data.ime;
        this.komentar = new Komentar(this.koment , false, this.ime );
        console.log(this.komentar);
        this.komentarService.addKomentar(this.komentar, this.smestajId).subscribe();
      }
    );
  }

 
}
