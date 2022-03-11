import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public message = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.loggedIn) {
      this.message = this.authService.retrieveUser().roleID == 1 ? 'Welcome to employee home page ,' +
        this.authService.retrieveUser().firstName : 'Welcome to manager home page ,' +
      this.authService.retrieveUser().firstName;
    }

  }

}
