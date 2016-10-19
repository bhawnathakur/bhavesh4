import {Component} from '@angular/core';
import {CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt';
@Component({
    selector:'profile',
    template:'<h1>This is profile page</h1>'


})
@CanActivate(() => tokenNotExpired())
export class ProfileComponent{



}