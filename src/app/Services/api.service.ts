import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url = 'http://localhost:60096/api/';

  constructor(private http: HttpClient) {
  }

  public CheckServer() {
    return this.http.get<boolean>(this.url + `check`);
  }
}
