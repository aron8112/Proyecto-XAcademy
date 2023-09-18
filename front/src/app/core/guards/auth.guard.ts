import { inject } from '@angular/core';
import { CanActivateFn, CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) =>
{
    const authService = inject(AuthService);
    const router = inject(Router);
    const data = authService.isAuthenticated();
    if (!data)
    {
        router.navigate(['/login'])
        return false
    }
    return data
};

export const authAdminRoleGuard: CanMatchFn = (route, state) =>
{
    const authService = inject(AuthService);
    const router = inject(Router);
    const data = authService.getAdminRole();
    if (!data)
    {
        alert('No podes acceder a esta página')
        router.navigate(['/home'])
        return false
    }
    return data
};

export const authTeacherRoleGuard: CanMatchFn = (route, state) =>
{
    const authService = inject(AuthService);
    const router = inject(Router);
    const data = authService.getTeacherRole();
    if (!data)
    {
        alert('No podes acceder a esta página')
        router.navigate(['/home'])
        return false
    }
    return data
};

export const authBothRoleGuard: CanMatchFn = (route, state) =>
{
    const authService = inject(AuthService);
    const router = inject(Router);
    const data = authService.getAdminAndTeacherRole();
    if (!data)
    {
        alert('No podes acceder a esta página')
        router.navigate(['/home'])
        return false
    }
    return data
};
