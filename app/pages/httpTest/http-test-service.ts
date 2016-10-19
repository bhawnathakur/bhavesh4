import {Injectable} from '@angular/core';
import{Http,Headers} from '@angular/http';
 import { Observable }     from 'rxjs/Observable';
 import{Message} from '../login/message.model';
@Injectable()
export class HTTPTestService{
  getData:string;
  postData:string;
  constructor(private _http:Http){}
  getCurrentTime(){

return this._http.get('http://date.jsontest.com').map(
res=>res.json()


);
  }
  postJSON(){
var json=JSON.stringify({var1:'test',var2:3});

var headers= new Headers({
   'Content-Type':'application/json'
})

return this._http.post('http://localhost:3000/test',json,{headers:headers}).map(
res=>res.json()
)
  }
}