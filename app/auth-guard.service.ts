import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import  'rxjs/add/observable/of';
import { Router , CanActivate , ActivatedRouteSnapshot , RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

constructor() { }

canActivate( route:ActivatedRouteSnapshot , router: RouterStateSnapshot):Observable<boolean> {
    return Observable.of(false);
}

}