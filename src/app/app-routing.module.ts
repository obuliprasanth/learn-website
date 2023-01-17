import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }, 
  { path: 'authlogin', loadChildren: () => import('./authlogin/authlogin.module').then(m => m.AuthloginModule) },
  { path: 'website', loadChildren: () => import('./website/website.module').then(m => m.WebsiteModule) }, 
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
