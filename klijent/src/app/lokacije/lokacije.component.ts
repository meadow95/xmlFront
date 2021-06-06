import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-lokacije',
  templateUrl: './lokacije.component.html',
  styleUrls: ['./lokacije.component.css']
})
export class LokacijeComponent implements OnInit {

  lokacija: string;
  posts: Post[] = [];
  rezultati: number = 0;

  constructor(private postService: PostService,) { }

  ngOnInit() {
  }

  OnSubmit(){

    this.postService.getPostsByLocation(this.lokacija).subscribe(data => {
      if(data != null){
        this.posts = data;
        this.rezultati = 1;
      }
      else{

        this.rezultati = 0;
      }

      
    });

  }

  search(){

    this.postService.getPostsByLocation(this.lokacija).subscribe(data => {
      if(data != null){
        this.posts = data;
        this.rezultati = 1;
      }
      else{

        this.rezultati = 0;
      }

      
    });


  }
}

