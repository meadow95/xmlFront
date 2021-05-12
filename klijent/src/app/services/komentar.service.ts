import { Observable } from 'rxjs/Observable';
import { Komentar } from './../model/komentar';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json'})
};

@Injectable()
export class KomentarService {

  private url = 'http://localhost:8080/komentari';

  constructor(private http: HttpClient) { }

  addKomentar(komentar: Komentar, smestajId: string): Observable<Komentar> {
    return this.http.post<Komentar>(this.url + '/' + smestajId, komentar, httpOptions);
  }

}
