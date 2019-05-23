import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';
import { EventService } from 'src/app/Services/event.service';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public message = '';

  constructor(
    private userService: UserService, 
    private router: Router,
    private eventService: EventService) { }

  ngOnInit() {
  }

  public signIn(login: string, password: string) {
    if (login && password) {
      this.userService.SignIn(login, password).subscribe(responce => {
        if (responce) {
          this.eventService.signedIn();
          this.router.navigate(["/home"]);
        } else {
          this.message = 'Login or Password are incorect.';
        }
      });
    } else {
      this.message = 'Enter your Login and Password';
    }
  }

}
