import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthloginRoutingModule } from './authlogin-routing.module';
import { AuthloginComponent } from './authlogin.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { ChangepasswordComponent } from './changepassword/changepassword.component';


@NgModule({
  declarations: [
    AuthloginComponent,
    LoginComponent,
    RegisterComponent,
    ForgetpasswordComponent,
    ChangepasswordComponent
  ],
  imports: [
    CommonModule,
    AuthloginRoutingModule
  ]
})
export class AuthloginModule { }
