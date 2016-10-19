import {Component} from '@angular/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES, FormBuilder,Validators,Control,ControlGroup } from '@angular/common';
import { NgForm } from '@angular/common';

@Component({
    moduleId:module.id,
selector:'formRegister',
templateUrl:'./form.component.html',
directives: [ CORE_DIRECTIVES,FORM_DIRECTIVES] 
})
export class FormComponent{
    user={email:'',password:''};
 onSubmit(value: any) {
    console.log(value);
  }

}