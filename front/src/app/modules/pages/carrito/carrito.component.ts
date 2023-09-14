import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from './user.service';
import { User } from 'src/app/core/interfaces/user';
import { CoursesService } from '../cursos/cursos.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit
{
  id: any


  user: any
  courses: any
  constructor(private userService: UserService,
    private authService: AuthService,
    private courseService: CoursesService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>
    {
      this.id = paramMap.get('id')
      this.getUser(this.authService.setUserId().id)
    });
  }

  getUser(id: any): void
  {
    this.userService.getOneUser(id).subscribe(user =>
    {
      this.user = user
    })
  }

  getCoursesByStudent(): void
  {
    this.user.Courses = this.courses
  }

  ngOnDestroy(): void
  {

  }
}
