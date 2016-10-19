import { Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {tokenNotExpired, JwtHelper}    from 'angular2-jwt';
import {enableProdMode} from '@angular/core';
import {NavComponent} from './nav.component';


enableProdMode();
@Component({
    selector: 'my-app',
    templateUrl: './app/app.component.html' ,
    directives: [NavComponent],
})
export class AppComponent {
    

}
