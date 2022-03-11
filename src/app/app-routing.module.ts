import { AddReimbursementComponent } from './add-reimbursement/add-reimbursement.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ViewReimbursementComponent } from './view-reimbursement/view-reimbursement.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';



const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "view-reimbursement", component: ViewReimbursementComponent },
  { path: "view-all-employees", component: ViewEmployeesComponent },
  { path: "home", component: HomeComponent },
  { path: "submit-reimbursement", component: AddReimbursementComponent },
  { path: "edit-user", component : EditUserComponent},
  { path: "view-user-info" , component : ViewUserInfoComponent},
  { path: "", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
