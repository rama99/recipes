import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/of';
import { Router , CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';

import { Auth } from './services/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

constructor( private auth:Auth ,
             private router:Router) { }

canActivate( route:ActivatedRouteSnapshot , router: RouterStateSnapshot) {

    if(this.auth.authenticated()) {
        console.log('Authorized... :)');
        return true;
    }
    else {
        console.log('UnAuthorized;');
        return false;
    }

  
  
}

}