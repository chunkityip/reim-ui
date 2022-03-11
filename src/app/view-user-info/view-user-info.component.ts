import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-view-user-info',
  templateUrl: './view-user-info.component.html',
  styleUrls: ['./view-user-info.component.css']
})


export class ViewUserInfoComponent implements OnInit {

  public user: User[] = [];
  private currentEmpId: number | undefined = 0;
  anEmployee: User[] = [];

  constructor(private userService: UserService, private router: Router,
     private activatedRoute: ActivatedRoute
  ) { }
  
  
  ngOnInit(): void {
  }

  getAnEmployee(userID: number) {
    let userId: any = this.activatedRoute.snapshot.paramMap.get("uID");
    console.log(userId);
    // fetch the book with the bookId from the service layer
    this.userService.fetchAnEmployee(userId).subscribe((response) => {
  //    this.anEmployee = response;
    });
  }


  // searchReimbursements() {
  //   if (this.currentEmpId && this.currentEmpId > 0) {
  //     this.userService.fetchAnEmployee(this.currentEmpId).subscribe(reimbs => {
  //       this.user = reimbs;
  //     });
  //   } else {
  //     this.userService.fetchAnEmployee().subscribe(reimbs => {
  //       this.user = reimbs;
  //     });
  //   }

  // }

  showRequests(userId: number | undefined) {
    console.log(userId);
    this.router.navigate(['view-reimbursement'], { queryParams: { 'empid': userId } });
  }
}
