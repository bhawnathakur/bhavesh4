import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import {HomeComponent} from './pages/home/home.component';
import {AboutComponent} from './pages/about/about.component';
import {ServicesComponent} from './pages/services/services.component';
import {CalculatorsComponent} from './pages/calculators/calculators.component';
import {ContactComponent} from './pages/contact/contact.component';
import {RegisterComponent} from './pages/register/register.component';
import {LoginComponent} from './pages/login/login.component';
import {HTTP_PROVIDERS} from           '@angular/http';
import {SigninComponent} from './pages/register/signin.component';
import {SignupComponent} from './pages/register/signup.component';

import {HTTPTestComponent} from './pages/httpTest/http-test.component';
import { routing,appRoutingProviders } from './app.routing';
import {registerRouting} from './pages/register/register.routing';
import {AccountComponent} from './pages/createAccount/Account.component';
import {ProfileComponent} from './pages/profile/profile.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
@NgModule({
  imports: [
    BrowserModule,
    
    routing
  ],
  declarations: [AppComponent,HomeComponent,ContactComponent,ServicesComponent,AboutComponent,LoginComponent
 ,CalculatorsComponent,ProfileComponent,HTTPTestComponent,SigninComponent,RegisterComponent,SignupComponent,AccountComponent ],
  providers: [
    appRoutingProviders,HTTP_PROVIDERS,{provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }