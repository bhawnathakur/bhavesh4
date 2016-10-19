import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule }  from '@angular/router';

import { SignupComponent } from './signup.component';
import { SigninComponent }   from './signin.component';
import { RegisterComponent } from './register.component';

const registerRoutes: Routes = [
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      { path: '/signin',  component: SigninComponent },
      { path: '/signup',     component: SignupComponent }
    ]
  }
];

export const registerRouting: ModuleWithProviders = RouterModule.forChild(registerRoutes);
RouterModule.forChild(registerRoutes);