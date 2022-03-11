import { Reimbursement } from './../models/reimbursement.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReimbursementService {

  constructor(private http: HttpClient) { }

  addCase(reimbursementModel: Reimbursement): Observable<Reimbursement> {
    return this.http.post<Reimbursement>("http://localhost:2020/api/reimbursements", reimbursementModel);
  }

  fetchAnEmployee(statusid: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:2020/api/msbons" + statusid);
  }

  fetchSpecificEmployee(uid: number, statusid: number): Observable<Reimbursement> {
    return this.http.get<Reimbursement>("http://localhost:2020/api/msbons" + uid + statusid);
  }

  searchReimbursements(empid: number | undefined): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:2020/api/reimbursements/search?empid=" + empid);
  }

  getAllReimbursements(): Observable<Reimbursement[]> {
    return this.http.get<Reimbursement[]>("http://localhost:2020/api/reimbursements");
  }

  updateReimbursements(reimid: number | undefined, statusid: number | undefined): Observable<any> {
    return this.http.put<any>("http://localhost:2020/api/reimbursements", {
      "reimbursementsID": reimid,
      "reimbursementsStatusID": statusid
    });
  }

}
