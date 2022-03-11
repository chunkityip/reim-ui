import { AddReimbursementComponent } from './add-reimbursement/add-reimbursement.component';
import { LogoutComponent } from './logout/logout.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ViewReimbursementComponent } from './view-reimbursement/view-reimbursement.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ViewUserInfoComponent } from './view-user-info/view-user-info.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewEmployeesComponent,
    HomeComponent,
    ViewReimbursementComponent,
    HeaderComponent,
    LogoutComponent,
    AddReimbursementComponent,
    FooterComponent,
    EditUserComponent,
    ViewUserInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


