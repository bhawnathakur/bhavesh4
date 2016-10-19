import{Injectable} from '@angular/core';
import{Http,Headers} from '@angular/http';
import{Message} from './message.model';
import 'rxjs/add/operator/map';
@Injectable()
export class MessageService {
constructor(private http:Http){}
saveMessage(message:Message){
const body = JSON.stringify(message);
const headers = new Headers({
   'Content-Type':'application/json'
})
return this.http.post("http://localhost:3000/message",body,{headers:headers});

}
}

