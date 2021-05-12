import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  attemptAuth(ussername: string, password: string): Observable<any> {
    const credentials = { username: ussername, password: password };
    console.log('attempAuth ::' + ussername + '::::' + password);
    return this.http.post<any>(
      'http://localhost:8080/token/generate-token',
      credentials
    );
  }
}
