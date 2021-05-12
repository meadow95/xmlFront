import { Observable } from 'rxjs/Observable';
import { Poruka } from './../model/poruka';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable()
export class PorukaService {

  private url = 'http://localhost:8080/poruka';

  constructor(
    private http: HttpClient
  ) { }

  sendMessage(poruka: Poruka): Observable<Poruka> {
    return this.http.post<Poruka>(this.url, poruka, httpOptions);
  }

}
