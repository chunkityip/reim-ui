import { Reimbursement } from './../models/reimbursement.model';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  validateUser(newUser: User): Observable<User> {
    console.log(newUser.userName);
    console.log(newUser.userPassword);
    return this.http.post<User>('http://localhost:2020/api/users/logon', {
      userName: newUser.userName,
      userPassword: newUser.userPassword
    });
  }

  fetchAllEmployee(): Observable<User[]> {
    return this.http.get<User[]>("http://localhost:2020/api/users/search?roleid=1");
  }

  fetchAnEmployee(userID: number): Observable<User> {
    return this.http.get<User>("http://localhost:2020/api/getUser" + userID);
  }


  fetchSpecificEmployee(uid: number, statusid: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:2020/api/msbons" + uid + statusid);
  }

  updateEmployeeInfo(userModel: User): Observable<User>{
    return this.http.put<User>("http://localhost:2020/api/users", JSON.stringify(userModel));
  }

  
}