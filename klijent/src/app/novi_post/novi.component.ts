import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { PostService } from '../post.service';

@Component({
  selector: 'app-novi',
  templateUrl: './novi.component.html',
  styleUrls: ['./novi.component.css']
})
export class NoviComponent implements OnInit {

  description: string;
  user: string;
  location: string;
  tag: string;
  picture: string;
  userFile;
  public imagePath;
  imgURL: any;
  public message: string;
  public post: Post = new Post("","", 0,0, "", "", "", []);

  constructor(private postService: PostService,) { }

  ngOnInit() {

    this.user = sessionStorage.getItem("authenticatedUser");
  }

  onSelectFile(event) {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.userFile = file;
     // this.f['profile'].setValue(file);
 
    var mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    
    this.imagePath = file;
    reader.readAsDataURL(file); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

}

onSubmit() {

    const formData = new  FormData();

    this.post.user = this.user;
    this.post.description = this.description;
    this.post.location = this.location;
    this.post.tags.push(this.tag);

    console.log("podaci" + JSON.stringify(this.post));

    //const article = this.crudApi.dataForm.value;
    formData.append('post',JSON.stringify(this.post));
    formData.append('file',this.userFile);
    this.postService.createData(formData).subscribe( data => {
    
      alert("Uspesno dodat post");
    });
  
 
}




}