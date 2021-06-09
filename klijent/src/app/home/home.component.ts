import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Post[];
  username: string;
  
  constructor(private postService: PostService) { }

  ngOnInit() {

    this.username = sessionStorage.getItem("authenticatedUser");
    console.log("User je: " + this.username);

    this.postService.getHomePage(this.username).subscribe(
      data => {
        this.posts = data;
      }
    );


  }

}
