import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  
  {path:"\login",component:LoginComponent},
  {path:"\signup",component:SignUpComponent},
  {path:"\portfolio",component:PortfolioComponent},
  {path:"",redirectTo:"\login",pathMatch:"full"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
