import {Component,OnInit} from '@angular/core';
import{AccountModel} from './account.model'
@Component({
    moduleId:module.id,
selector:'account',
templateUrl: './account.component.html',



})

export class AccountComponent {
 model = new AccountModel('neerajthakur2@gmail.com');
 submitted = false;
 onSubmit() {
    console.log("his.model.email")
  }
  get diagnostic() { return JSON.stringify(this.model); }
  
}
  