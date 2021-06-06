import { AlertService } from './../alert/alert.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { KorisnikService } from './../korisnik/korisnik.service';
import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik/korisnik';

@Component({
  selector: 'app-registracija',
  templateUrl: './registracija.component.html',
  styleUrls: ['./registracija.component.css']
})
export class RegistracijaComponent implements OnInit {

  korisnik = new Korisnik('', '', '', '', '', '', [], [], []);

  loading = false;
  error = '';

  constructor(
    private korisnikService: KorisnikService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit() {

  }

  registruj() {
    this.loading = true;
    this.korisnikService.insertKorisnik(this.korisnik).subscribe(
      data => {
        this.alertService.success('Registracija uspesna', true);
        this.router.navigate(['login']);
      },
      error => {
        this.alertService.error('Unesen e-mail vec postoji');
        this.loading = false;
      }
    );
  }

}
