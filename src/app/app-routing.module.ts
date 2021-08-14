import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CompDetailComponent } from './comp-detail/comp-detail.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ShirtsComponent } from './shirts/shirts.component';

const routes: Routes = [
  {path : '' , component : HomeComponent},
  {path : 'about' , component : AboutComponent},
  {path  : 'contact' , component : ContactComponent},
  {path : 'home/:id' , component : ShirtsComponent},
  {path: 'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'details',component:CompDetailComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
