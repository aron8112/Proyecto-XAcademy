import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from './user.service';
import { CoursesService } from '../cursos/cursos.service';


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
    this.userService.getOneUser(id).subscribe({
      next: (response) =>
      {
        this.user = response
        console.log(response)
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        console.log(errorMessage)
      },
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
