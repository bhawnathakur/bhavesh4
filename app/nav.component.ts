
import { Component, NgZone } from '@angular/core';
import {tokenNotExpired, JwtHelper}    from 'angular2-jwt';
import {Location} from '@angular/common';
declare var Auth0Lock: any  ;

declare var path: any  ;
@Component({
    selector: 'my-nav',
    templateUrl: './app/nav.component.html'   
})

export class NavComponent {
 
lock= new Auth0Lock('kiVYUbz0kC9cNesuaB3fh8csLhsVoyzk', 'neerajthakur.auth0.com');
jwtHelper: JwtHelper = new JwtHelper();
    location: Location;
    ngZone: NgZone;

    constructor(
      location: Location,
      ngZone: NgZone) {
        this.location = location;
        this.ngZone = ngZone;
    }

    login() {
      var self = this;
      this.lock.show((err: string, profile: string, id_token: string) => {
        if (err) {
          throw new Error(err);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);
this.loggedIn();
        console.log(
          this.jwtHelper.decodeToken(id_token),
          this.jwtHelper.getTokenExpirationDate(id_token),
          this.jwtHelper.isTokenExpired(id_token)
        );

        this.ngZone.run(() => self.loggedIn());
      });
    }

    logout() {
      localStorage.removeItem('profile');
      localStorage.removeItem('id_token');
this.loggedIn();
      
    }

    loggedIn() {
      return tokenNotExpired();
    }

  
 }