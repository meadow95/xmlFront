import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik/korisnik';
import { KorisnikService } from '../korisnik/korisnik.service';

@Component({
  selector: 'app-profil-pretraga',
  templateUrl: './profil-pretraga.component.html',
  styleUrls: ['./profil-pretraga.component.css']
})
export class ProfilPretragaComponent implements OnInit {

  korisnik: Korisnik;
  ima_postova: number;

  constructor(private korisnikService: KorisnikService) { }

  ngOnInit() {

    this.korisnikService.getKorisnikByUsernameSearch().subscribe(data => {
      this.korisnik = data;
      if(this.korisnik.postovi == null){

        this.ima_postova = 0;
      }
      else{
        this.ima_postova = 1;
      }
      
     });

  }

}
