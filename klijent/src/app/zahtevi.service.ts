import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Korisnik } from './korisnik/korisnik';
import { Zahtev } from './model/zahtev';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable()
export class ZahteviService {

  private url_post = 'http://localhost:8080/user';

  constructor(private http: HttpClient) { }
  
  followPublicProfile(user: string, following: string): Observable<Korisnik> {
    return this.http.get<Korisnik>(this.url_post + '/followPublic/' + user + '/' + following, httpOptions);
  }

  sendRequest(user: string, following: string): Observable<string> {
    return this.http.get<string>(this.url_post + '/followPrivate/' + user + '/' + following, httpOptions);
  }

  getRequests(user: string): Observable<Zahtev[]> {
    return this.http.get<Zahtev[]>(this.url_post + '/getRequests/' + user);
  }

  acceptRequest(request: string): Observable<string> {
    return this.http.get<string>(this.url_post + '/acceptRequest/' + request, httpOptions);
  }

  ignoreRequest(request: string): Observable<string> {
    return this.http.get<string>(this.url_post + '/ignoreRequest/' + request, httpOptions);
  }
}
