import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { StringMap } from '@angular/core/src/render3/jit/compiler_facade_interface';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:60096/api/';

  constructor(private http: HttpClient) {
  }

  public SignIn(login: string, password: string) {
    return this.http.get<boolean>(this.url + `login/${login}/${password}`);
  }

  public SignUp(email: string, login: string, psw: string) {
    var user = { Email: email, Login: login, Password: psw };
    return this.http.post(this.url + "signup", user, httpOptions).pipe();
  }
}
