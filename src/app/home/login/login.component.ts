import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { User } from '../../models';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginError: string;

  user: User = new User ();


  constructor(
    private readonly auth: AuthService,
    private readonly router: Router
  ) { }

  userLogin(user: User) {
    this.auth.login(user).subscribe(
      loggedUser => {
        console.log('loggin in', loggedUser);
        this.router.navigate(['dashboard']);
      },
      error => {
        console.log('error', error);
        this.loginError = error;
      }
  );

  }


}
