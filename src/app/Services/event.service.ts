import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  public signIn = new Subject();

  public signOut = new Subject();

  public serverWork = new Subject();

  constructor() { }

  public signedIn() {
    this.signIn.next();
  }

  public signedOut() {
    this.signOut.next();
  }

  public serverWorking(value: boolean) {
    this.serverWork.next(value);
  }
}
