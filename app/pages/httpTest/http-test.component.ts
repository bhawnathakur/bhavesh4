import {Component} from '@angular/core';
import{HTTPTestService} from './http-test-service'

@Component({
    moduleId:module.id,
selector:'httptest',
template:`<button (click)="onTestGet()">Get Request</button><br>
<span>Output:{{getData}}</span><br>
<button (click)="onTestPost()">Post Request</button><br>
<span>Output:{{postData}}</span><br>


`,
providers:[HTTPTestService],
directives: [] 
})
export class HTTPTestComponent{
    constructor(private _httpTestService:HTTPTestService){}
  getData:string;
  postData:string;
  onTestGet(){
this._httpTestService.getCurrentTime().subscribe(

    data=>this.getData=JSON.stringify(data),
    error=>alert(error),
    ()=>console.log("successfully get")
);

}
 onTestPost(){

this._httpTestService.postJSON().subscribe(

    data=>this.postData=JSON.stringify(data),
    error=>alert(error),
    ()=>console.log("successfully post")
);
}


}
