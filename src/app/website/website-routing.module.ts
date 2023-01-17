import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { HomeComponent } from './home/home.component';
import { WebsiteComponent } from './website.component';

const routes: Routes = [
  { path: '',redirectTo: 'website',pathMatch: 'full'},
  {path: '',component: WebsiteComponent,
    children: [
      { path: '',component:HomeComponent},
      {path : 'about', component :AboutusComponent}
    ],
  }
 
  // { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
