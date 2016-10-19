import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {CalculatorsComponent} from './pages/calculators/calculators.component';
import {ContactComponent} from './pages/contact/contact.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {HTTPTestComponent} from './pages/httpTest/http-test.component';
import {SigninComponent} from './pages/register/signin.component';
import {SignupComponent} from './pages/register/signup.component';
import {AccountComponent} from './pages/createAccount/Account.component';
import {ProfileComponent} from './pages/profile/profile.component';
const appRoutes: Routes = [
 
  
   {
    path: '',
    component: HomeComponent,
    data: {
      title: 'Home'
    }
  },
  
    {
    path: 'about',
    component: AboutComponent,
    data: {
      title: 'About'
    }
  },
  
    {
    path: 'services',
    component: ServicesComponent,
    data: {
      title: 'Servces'
    }
  },
    {
    path: 'calculators',
    component: CalculatorsComponent,
    data: {
      title: 'Calculators'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Calculators'
    }
  },
  {
    path: 'profile',
    component: ProfileComponent,
    data: {
      title: 'Profile'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      { path: 'signin', component: SigninComponent}, // url: about/
      { path: 'signup', component: SignupComponent } // url: about/item
    ]
  },
    {
    path: 'contact',
    component: ContactComponent,
    data: {
      title: 'Calculators'
    }
  },
  {
    path: 'account',
    component: AccountComponent,
    data: {
      title: 'Account'
    }
  },
  {
    path: 'test',
    component: HTTPTestComponent,
    data: {
      title: 'Calculators'
    }
  },
  
{
    path: 'register',
    component: RegisterComponent,
    children: [
     { path: '', component: SignupComponent},
      { path: 'signin', component: SigninComponent}, 
      { path: 'signup', component: SigninComponent } 
    ]
  },
  {
    path: '**',
    redirectTo: '',
    
   
  },
  
  
  ]
export const appRoutingProviders: any[] = [

];

export const routing = RouterModule.forRoot(appRoutes);