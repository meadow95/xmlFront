import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-tagovi',
  templateUrl: './tagovi.component.html',
  styleUrls: ['./tagovi.component.css']
})
export class TagoviComponent implements OnInit {

  tag: string;
  posts: Post[] = [];
  rezultati: number = 0;

  constructor(private postService: PostService,) { }

  ngOnInit() {
  }

  OnSubmit(){

    this.postService.getPostsByTag(this.tag).subscribe(data => {
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

    this.postService.getPostsByTag(this.tag).subscribe(data => {
      if(data != null){
        this.posts = data;
        console.log("Postovi: " + this.posts);
        this.rezultati = 1;
      }
      else{

        alert("Nema rezultata pretrage");
        this.rezultati = 0;
      }

      
    });

  }

}
