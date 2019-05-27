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

  public checkGitHubRepository(owner: string, repositoryName: string) {
    return this.http.get(this.url + `repo/${owner}/${repositoryName}`);
  }

  public startTranslate() {

  }
}
