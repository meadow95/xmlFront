import { Component, OnInit } from '@angular/core';
import { Korisnik } from '../korisnik/korisnik';
import { KorisnikService } from '../korisnik/korisnik.service';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-profil-pretraga',
  templateUrl: './profil-pretraga.component.html',
  styleUrls: ['./profil-pretraga.component.css']
})
export class ProfilPretragaComponent implements OnInit {

  korisnik: Korisnik;
  ima_postova: number = 0;
  posts: Post[];

  constructor(private korisnikService: KorisnikService, private postService: PostService) { }

  ngOnInit() {

    this.korisnikService.getKorisnikByUsernameSearch().subscribe(data => {
      this.korisnik = data;

      if(data!=null){

        this.ima_postova = 1;
        this.postService.getPostsUser(this.korisnik.username).subscribe(

          data=> {
            this.posts = data;
            
            console.log("Postovi:" + this.posts);
            console.log("Ima postova:" + this.ima_postova);

          }
  
  
        );

      }

      else{

        this.ima_postova = 0;
      }



      
     });

  }

}
