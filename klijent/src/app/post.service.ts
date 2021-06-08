import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from './model/post';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable()
export class PostService {

  private url_post = 'http://localhost:8080/post';

  constructor(private http: HttpClient) { }


  getPostsByLocation(location: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url_post + '/getPostsLocation/' + location + '/', httpOptions);
  }

  getPostsByTag(tag: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url_post + '/getPostsTag/' + tag + '/', httpOptions);
  }

  createData(formData: FormData): Observable<any> {
    return this.http.post(this.url_post + '/createPost', formData);
  }

  getPostsUser(user: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url_post + '/getPostsUser/' + user + '/', httpOptions);
  }


}
