import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthService
{

    /*Para revisar 
    public jwtHelper: JwtHelperService,*/
    constructor(private apiService: ApiService, private router: Router) { }  // ...
    public isAuthenticated(): Observable<boolean>
    {
        const token = localStorage.getItem('auth_token');    // Check whether the token is expired and return true or false
        if (token)
        {
            return of(true)
        }
        // return of(!this.jwtHelper.isTokenExpired(token));
        return of(false)
    }

    logout(): void
    {
        this.router.navigate(['/home']).then(() =>
        {
            localStorage.removeItem('auth_token');
            // this.apiService.deleteHeader('Authorization')
        });
    }

}
