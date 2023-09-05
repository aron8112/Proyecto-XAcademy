import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) =>
{
    const authService = inject(AuthService);
    return authService.isAuthenticated();
};

// import { Injectable } from '@angular/core';
// import { CanActivate, Route, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable({
//     providedIn: 'root'
// })
// export class AuthGuard implements CanActivate
// {
//     constructor(private auth: AuthService, public router: Router) { }
//     canActivate(): boolean
//     {
//         if (!this.auth.isAuthenticated())
//         {
//             this.router.navigate(['login']);
//             return false;
//         }
//         return true;
//     }
// }
