import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginRegistorComponent} from './login-registor/login-registor.component'
import {DashboardComponent} from './dashboard/dashboard.component'
const routes: Routes = [
  {path: '',component: LoginRegistorComponent},
  {path: 'dashboard',component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
