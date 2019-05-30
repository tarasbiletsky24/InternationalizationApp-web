import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit, OnDestroy {

  private subscriptions = [];

  public authorized = false;
  public serverWorking = false;

  constructor(
    private router: Router,
    private eventService: EventService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.subscriptions.push(this.eventService.signIn.subscribe(() => {
      this.authorized = true;
    }));

    this.subscriptions.push(this.eventService.signOut.subscribe(() => {
      this.authorized = false;
    }));

    this.subscriptions.push(this.eventService.serverWork.subscribe((responce: boolean) => {
      this.serverWorking = responce;
    }))
  }

  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  public signOut() {
    this.eventService.signedOut();
  }

  public register()
  {
    this.userService.SignUp("taras@gmail.com", "t", "123").subscribe();
  }

}
