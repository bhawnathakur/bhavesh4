import {Component} from '@angular/core';

@Component({
  selector: 'Contact',
  templateUrl: './app/pages/contact/contact.component.html'
})
export class ContactComponent{

    onSubmit(){

        console.log("posted")
    }
}