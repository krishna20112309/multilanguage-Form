import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/signin/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { SigninComponent } from './components/signin/signin.component';


const routes: Routes = [


  {path:'',pathMatch:'full',redirectTo:'signin'},
  {path:'signin',component:SigninComponent},
  {path:'register',component:RegisterComponent},
  {path:'home',component:HomeComponent}


];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
