import {Component, OnInit, OnDestroy} from '@angular/core';
import {FormComponent} from './form.component';


import { ROUTER_DIRECTIVES, ActivatedRoute } from '@angular/router';
@Component({
     moduleId: module.id,

templateUrl:'./register.component.html',
providers:[FormComponent],
directives:[FormComponent,ROUTER_DIRECTIVES] 

})

export class RegisterComponent{
    
}