import { Component } from '@angular/core';
import { User } from '../../models';
import { AuthService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  registrationErrors: string[] = [];

  user: User = new User ();

  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }


  userRegister(user: User) {
    this.auth.register(user).subscribe(
      createdUser => {
        console.log('created', createdUser);
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log('error', error);
        this.registrationErrors = error.error;
      });
  }

}
