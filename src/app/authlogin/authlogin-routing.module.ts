import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthloginComponent } from './authlogin.component';

const routes: Routes = [{ path: '', component: AuthloginComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthloginRoutingModule { }
