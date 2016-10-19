import {Component} from '@angular/core';
import {Message} from './message.model';
import{MessageService} from './message.service';
@Component({
     moduleId: module.id,
selector:'login',
templateUrl:'./login.component.html',
providers:[MessageService]

})

export class LoginComponent{
    messages:Message[]=[new Message("Hello")];
    postData:string;;
    constructor(private messageservice:MessageService){}
    onSubmit(){
const rnd=Math.floor(Math.random()*100);
const message=new Message(rnd +" is an awsome nymber!");
this.messages.push(message);
this.messageservice.saveMessage(message).subscribe(
    data=>this.postData=JSON.stringify(data),
    error=>alert(error),
    ()=>console.log("successfully post")
 

)
    }
    
}



