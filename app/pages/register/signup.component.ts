import {Component} from '@angular/core';
import {FormComponent} from './form.component';

import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
@Component({
    moduleId:module.id,
selector:'signup',
template:'<formRegister></formRegister>',
providers:[FormComponent],
directives:[FormComponent,ROUTER_DIRECTIVES] 

})
export class SignupComponent{
 
  }


