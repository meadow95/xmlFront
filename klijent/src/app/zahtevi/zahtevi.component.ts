import { Component, OnInit } from '@angular/core';
import { Zahtev } from '../model/zahtev';
import { ZahteviService } from '../zahtevi.service';

@Component({
  selector: 'app-zahtevi',
  templateUrl: './zahtevi.component.html',
  styleUrls: ['./zahtevi.component.css']
})
export class ZahteviComponent implements OnInit {

  username: string;
  zahtevi: Zahtev[];

  constructor(private zahteviService: ZahteviService,) { }

  ngOnInit() {

    this.username = sessionStorage.getItem("authenticatedUser");
    console.log("User je: " + this.username);

    this.zahteviService.getRequests(this.username).subscribe(
      data => {
        this.zahtevi = data;
      }
    );

  }

  prihvati(id: string){

    this.zahteviService.acceptRequest(id).subscribe(
      data => {
        
        window.alert("Prihvatili ste zahtev");

        window.location.reload();
      }
    );


  }

  odbij(id: string){

    this.zahteviService.ignoreRequest(id).subscribe(
      data => {
        
        window.alert("Odbili ste zahtev");

        window.location.reload();
      }
    );


  }

}
