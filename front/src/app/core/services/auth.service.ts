import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService
{

    constructor(public jwtHelper: JwtHelperService) { }  // ...
    public isAuthenticated(): Observable<boolean>
    {
        const token = localStorage.getItem('token');    // Check whether the token is expired and return
        // true or false
        return of(!this.jwtHelper.isTokenExpired(token));
    }

}
