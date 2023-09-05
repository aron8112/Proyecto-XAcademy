import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from 'src/app/components/commons/curso/curso.component';
import { PublicacionComponent } from 'src/app/components/commons/publicacion/publicacion.component';
import { PreciosComponent } from './precios/precios.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { CarritoComponent } from './carrito/carrito.component';
import { LoginFormComponent } from 'src/app/components/forms/login-form/login-form.component';
import { RegisterFormComponent } from 'src/app/components/forms/register-form/register-form.component';
import { FormsModule } from '@angular/forms';
import { DashboardPageComponent } from '../dashboard/dashboard-page/dashboard-page.component';


@NgModule({
  declarations: [
    CarritoComponent,
    CursosComponent,
    CursoComponent,
    HomeComponent,
    LoginFormComponent,
    PublicacionComponent,
    PreciosComponent,
    RegisterFormComponent,
    DashboardPageComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    CursosComponent,
    PreciosComponent
  ]
})
export class PagesModule { }
