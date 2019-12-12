import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: ``,redirectTo: `/Home`, pathMatch: `full`},
  {path: `Home`, component: HomeComponent}
];

import { HomeComponent } from './components/home/home.component';

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
