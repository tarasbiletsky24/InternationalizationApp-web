import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:60096/api/';
  constructor(private http: HttpClient) {
  }
  public Login(login: string, password: string) {
    this.http.get<boolean>(this.url + `login/${login}/${password}`);
  }
}
