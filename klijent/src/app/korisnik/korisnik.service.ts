import { Korisnik } from './korisnik';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class KorisnikService {

  username: string;

  private url_signup = 'http://localhost:8080/user/signup';
  private url_korisnik = 'http://localhost:8080/user';
  private url_user_username = 'http://localhost:8080/user/userUsername/';

  insertKorisnik(korisnik: Korisnik): Observable<Korisnik> {
    return this.http.post<Korisnik>(this.url_signup, korisnik, httpOptions);
  }

  getKorisnik(id: any): Observable<Korisnik> {
    return this.http.get<Korisnik>(this.url_korisnik + '/' + id.sub + '/');
  }

  getKorisnikById(id: any): Observable<Korisnik> {
    return this.http.get<Korisnik>('http://localhost:8080/korisnik/' + id + '/');
  }

  getKorisnikByUsername(username: any): Observable<Korisnik> {
    return this.http.get<Korisnik>(this.url_user_username + username + '/');
  }

  getKorisnikByUsernameSearch(): Observable<Korisnik> {
    return this.http.get<Korisnik>(this.url_user_username + this.username + '/');
  }

  constructor(private http: HttpClient) { }

}
