import { AuthService } from './../services/auth.service';
import { User } from './../models/user.model';
import { Reimbursement } from './../models/reimbursement.model';
import { ReimbursementService } from './../services/reimbursement.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-reimbursement',
  templateUrl: './view-reimbursement.component.html',
  styleUrls: ['./view-reimbursement.component.css']
})
export class ViewReimbursementComponent implements OnInit {

  public reimbursements: Reimbursement[] = [];
  public isManager = false;
  private currentEmpId: number | undefined = 0;

  constructor(private route: ActivatedRoute, private reimbursementService: ReimbursementService, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(qp => {
      this.currentEmpId = qp['empid'];
      let loggedinUser: User = this.authService.retrieveUser();
      if (loggedinUser.roleID == 1) {
        this.currentEmpId = loggedinUser.userID;
        this.isManager = false;
      } else {
        this.isManager = true;
      }
      this.searchReimbursements();
    });
  }

  searchReimbursements() {
    if (this.currentEmpId && this.currentEmpId > 0) {
      this.reimbursementService.searchReimbursements(this.currentEmpId).subscribe(reimbs => {
        this.reimbursements = reimbs;
      });
    } else {
      this.reimbursementService.getAllReimbursements().subscribe(reimbs => {
        this.reimbursements = reimbs;
      });
    }

  }

  approve(rid: number | undefined) {
    this.updateReimbursement(rid, 3);
  }

  deny(rid: number | undefined) {
    console.log('denied');
    this.updateReimbursement(rid, 4);
  }

  updateReimbursement(rid: number | undefined, statusid: number | undefined) {
    this.reimbursementService.updateReimbursements(rid, statusid).subscribe(res => {
      if (res['message'] == 'success') {
        this.searchReimbursements();
      }
    });
  }

}
