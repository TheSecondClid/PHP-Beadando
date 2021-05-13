import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { HomeComponent} from './home/home.component';
import {AuthGuardService } from './auth-guard.service';
import {QuoteComponent} from './quote/quote.component';
import {EditComponent} from './edit/edit.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
  {path: 'quote', component: QuoteComponent, canActivate: [AuthGuardService]},
  {path: 'edit', component: EditComponent, canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
