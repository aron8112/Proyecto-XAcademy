import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/pages/home/home.component';
import { CursosComponent } from './modules/pages/cursos/cursos.component';
import { PreciosComponent } from './modules/pages/precios/precios.component';
import { CarritoComponent } from './modules/pages/carrito/carrito.component';
import { authAdminRoleGuard, authBothRoleGuard, authGuard } from './core/guards/auth.guard';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { RegisterFormComponent } from './components/forms/register-form/register-form.component';
import { CursoComponent } from './components/commons/curso/curso.component';
import { CreateCourseComponent } from './components/forms/courses/create-course/create-course.component';
import { ModifyCourseComponent } from './components/forms/courses/modify-course/modify-course.component';
import { DashboardPageComponent } from './modules/dashboard/dashboard-page/dashboard-page.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'cursos', component: CursosComponent },
  { path: 'precios', component: PreciosComponent },
  { path: 'login', component: LoginFormComponent },
  { path: 'signup', component: RegisterFormComponent },
  { path: 'miperfil/:id', canActivate: [authGuard], component: CarritoComponent },
  { path: 'cursos/details/:id', component: CursoComponent },
  { path: 'cursos/liststudents', canActivate: [authGuard, authBothRoleGuard], component: DashboardPageComponent },
  { path: 'cursos/create', canActivate: [authGuard, authAdminRoleGuard], component: CreateCourseComponent },
  { path: 'cursos/modifcourse/:id', canActivate: [authGuard, authBothRoleGuard], component: ModifyCourseComponent },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
