import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ForumComponent } from './forum/forum.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';

const routes: Routes = [
  {path:'dashboard' , component:DashboardComponent},
  {path:'signin' , component:LoginComponent},
  {path:'signup' , component:RegistreComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'forum' , component:ForumComponent},
  {path:'forgetpassword', component:ForgetpasswordComponent},
  { path: '**', redirectTo: 'signin', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
