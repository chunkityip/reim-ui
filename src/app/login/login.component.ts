import { AuthService } from './../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  [x: string]: any;

  newUser: User = {
    userName: '',
    userPassword: ""
  }

  errorMessage: string = "";
  constructor(private userService: UserService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  validateUser() {
    console.log("login works");

    this.userService.validateUser(this.newUser).subscribe((response) => {
      console.log(response);
      if (response.userID && response.userID > 0) {
        this.authService.loggedIn = true;
        this.authService.storeUser(response);
        this.router.navigate(['home']);
      } else {
        this.authService.loggedIn = false;
        this.authService.destroyUser();
      }
    });


    console.log("login succesfull!!");
  }

}

