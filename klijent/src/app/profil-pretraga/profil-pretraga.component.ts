import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik/korisnik';
import { KorisnikService } from '../korisnik/korisnik.service';
import { Post } from '../model/post';
import { PostService } from '../post.service';
import { ZahteviService } from '../zahtevi.service';

@Component({
  selector: 'app-profil-pretraga',
  templateUrl: './profil-pretraga.component.html',
  styleUrls: ['./profil-pretraga.component.css']
})
export class ProfilPretragaComponent implements OnInit {

  korisnik: Korisnik;
  ima_postova: number = 0;
  posts: Post[];
  publicProfile: number = 0;
  username: string = "jovana";

  constructor(private korisnikService: KorisnikService, private postService: PostService, private zahteviService: ZahteviService) { }

  ngOnInit() {

   // this.username = sessionStorage.getItem("authenticatedUser");

    this.korisnikService.getKorisnikByUsernameSearch().subscribe(data => {
      this.korisnik = data;

      if(data!=null){

        if(this.korisnik.privateProfile === "no"){

          this.publicProfile = 1;

        }
        
        this.postService.getPostsUser(this.korisnik.username).subscribe(

          data=> {
            this.posts = data;
            
            console.log("Postovi:" + this.posts);
            console.log("Ima postova:" + this.ima_postova);
            console.log("Private profile:" + this.korisnik.privateProfile);

          }
  
  
        );

      }

      else{

        this.ima_postova = 0;
      }



      
     });

  }


  sendRequest(){

    if(this.korisnik.privateProfile === "no"){

      //odmah ubaci u listu onih koje pratim
      console.log("Usao u zapracivanje");
      this.zahteviService.followPublicProfile(this.username, this.korisnik.username).subscribe(

        data=> {

          if(data!= null){

            alert("Uspesno ste zapratili profil");
            
          }
          else{
            alert("Neuspesno zapracivanje profila");
          }

        }


      );

    }
    else{

      //posalji zahtev

      this.zahteviService.sendRequest(this.username, this.korisnik.username).subscribe(

        data=> {

          if(data!= null){

            alert("Uspesno ste poslali zahtev");
            
          }
          else{
            alert("Neuspesno slanje zahteva");
          }

        }


      );

    }


  }

}
