import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, of } from 'rxjs';
import { ApiService } from '../http/api.service';
import { Router } from '@angular/router';
import { User } from '../interfaces/user';

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

    setUserId(): any | null
    {
        const token: any = localStorage.getItem('auth_token');
        if (!token)
        {
            return null
        }
        const getdata: string[] = token.split('.')
        const data: any = JSON.parse(window.atob(getdata[1]))

        return data
    }

    getAdminRole(): boolean
    {
        const data = this.setUserId()
        if (!data.isAdmin)
        {
            return false
        }
        return true
    }

    getTeacherRole(): boolean
    {
        const data = this.setUserId()
        if (!data.isAdmin)
        {
            return false
        }
        return true
    }

    getAdminAndTeacherRole(): boolean
    {
        const data = this.setUserId()
        if (!data.isAdmin && !data.isTeacher)
        {
            return false
        }
        return true
    }

}
