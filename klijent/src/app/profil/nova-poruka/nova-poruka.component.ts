import { AlertService } from './../../alert/alert.service';
import { PorukaService } from './../../services/poruka.service';
import { Poruka } from './../../model/poruka';
import { TokenStorage } from './../../login-core/token-storage';
import { ActivatedRoute, Params } from '@angular/router';
import { KorisnikService } from './../../korisnik/korisnik.service';
import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../../korisnik/korisnik';
import * as jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-nova-poruka',
  templateUrl: './nova-poruka.component.html',
  styleUrls: ['./nova-poruka.component.css']
})
export class NovaPorukaComponent implements OnInit {
  agent: Korisnik;
  agentId: string;
  klijent: Korisnik;
  message: string;
  poruka: Poruka;

  constructor(
    private korisnikService: KorisnikService,
    private route: ActivatedRoute,
    private token: TokenStorage,
    private porukaService: PorukaService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    if (this.route.snapshot.params['agentId']) {
      this.route.params.subscribe((params: Params) => {
        this.agentId = params['agentId'];
      });
      this.korisnikService.getKorisnikById(this.agentId).subscribe(data => {
        this.agent = data;
      });
    }
    this.korisnikService.getKorisnik(jwt_decode(this.token.getToken())).subscribe(
      data => {
        this.klijent = data;
      }
    );
  }

  sendMessage() {
    this.poruka = new Poruka(this.message, this.klijent.id, this.agent.id);
    console.log(this.poruka);
    this.porukaService.sendMessage(this.poruka).subscribe();
    this.alertService.success('Poruka je uspesno poslata');
  }
}
