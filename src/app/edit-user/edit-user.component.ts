import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  toggleAdd: boolean = false;
  constructor(private userService: UserService) { }
  
  editInfo : User = {
    userID: 0,
    email: ""
  }

  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }

  ngOnInit(): void {
    this.updateEmployeeInfo();
  }

  updateEmployeeInfo(){
    this.userService.updateEmployeeInfo(this.editInfo).subscribe((response)=>{
      console.log(response);
      this.editInfo = {
        email: ""
      }
    });
  }
  
}