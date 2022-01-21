import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FaqsComponent } from './components/faqs/faqs.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { DashboradComponent } from './components/dashborad/dashborad.component';
import { HeaderComponent } from './components/header/header.component';
import { SucessPageComponent } from './components/sucess-page/sucess-page.component';
const routes: Routes = [
  {
    path:'',
    // redirectTo:"registration",
    component:RegistrationComponent
  },
  {
    path:'registration',
    component: RegistrationComponent
  },
  {
    path:'sucess',
    component: SucessPageComponent
  },
  // {
  //   path:"contact",
  //   component:ContactusComponent
  // },
  // {
  //   path:"fqas",
  //   component:FaqsComponent
  // },
  {
    path:'**',
    component: RegistrationComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const componentsArray = [RegistrationComponent,
  LoginComponent,
  DashboradComponent,
  HeaderComponent,
  SucessPageComponent,]
