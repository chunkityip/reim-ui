import { ReimbursementService } from './../services/reimbursement.service';
import { Reimbursement } from './../models/reimbursement.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './../services/user.service';
import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent implements OnInit {

  allEmployee: User[] = [];

  allEmployee1: User[] = [];

  constructor(private userService: UserService, private router: Router,
    private reimbursementService: ReimbursementService, private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.userService.fetchAllEmployee().subscribe(emps => {
      this.allEmployee = emps;
    });
  }
  getEmployeeInfo() {
    this.userService.fetchAllEmployee().subscribe((response) => {
      console.log(response);
      this.allEmployee = response;
    });
  }

  getAnEmployee(statusid: number) {
    let statusId: any = this.activatedRoute.snapshot.paramMap.get("sID");
    console.log(statusId);
    // fetch the book with the bookId from the service layer
    this.reimbursementService.fetchAnEmployee(statusId).subscribe((response) => {
      // this.anEmployee = response;
    });
  }

  showRequests(userId: number | undefined) {
    console.log(userId);
    this.router.navigate(['view-reimbursement'], { queryParams: { 'empid': userId } });
  }
}