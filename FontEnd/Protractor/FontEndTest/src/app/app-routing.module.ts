import { NgModule, Component, Host } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HomeComponent } from './pages/home/home.component';

// const routes: Routes = [
//   {path:'about', component: AboutComponent},
//   {path:'contact', component: ContactComponent },
//   {path: 'login',component: LoginComponent},
//   {path: 'sign-up',component: SignUpComponent},
//   {path: '',component: LoginComponent},
//   {path: 'home',component: HomeComponent}
// ];

@NgModule({
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
