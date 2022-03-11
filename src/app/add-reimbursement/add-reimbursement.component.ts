import { ReimbursementService } from './../services/reimbursement.service';
import { Reimbursement } from './../models/reimbursement.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-reimbursement',
  templateUrl: './add-reimbursement.component.html',
  styleUrls: ['./add-reimbursement.component.css']
})
export class AddReimbursementComponent implements OnInit {
  toggleAdd: boolean = false;

  newCase: Reimbursement = {
    reimbursementsAmount: 0,
    reimbursementsDescription: "",
  }
  constructor(private reimbursementService: ReimbursementService, private router: Router) { }

  ngOnInit(): void {
    this.addCase();
  }
  toggleAddForm() {
    if (this.toggleAdd) {
      this.toggleAdd = false;
    } else {
      this.toggleAdd = true;
    }
  }
  addCase() {
    this.reimbursementService.addCase(this.newCase).subscribe((response) => {
      console.log(response);
      this.newCase = {
        reimbursementsAmount: 0,
        reimbursementsDescription: "",
        reimbursementsApplicantID: 0,
        reimbursementsStatusID: 0
      }
    })
  }
}
