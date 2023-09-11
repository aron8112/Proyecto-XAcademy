import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/modules/pages/cursos/cursos.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit
{
  id: any;
  course: Icourses = {
    id: new String,
    courseName: new String,
    courseStartDate: new Date,
    courseEndDate: new Date,
    description: new Text,
    shortDescription: new Text,
    attendance: new Number,
    amountclasses: new Number,
    schedule: new String,
    deleted: new Boolean,
    visualized: new Boolean
  }

  constructor(private activatedRoute: ActivatedRoute, private courseService: CoursesService, private authService: AuthService, private router: Router, private apiService: ApiService) { }

  isTeacherOrAdmin: any
  isAdmin: any

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>
    {
      this.id = paramMap.get('id')
    });

    this.getCourseInfo(this.id)
    this.isTeacherOrAdmin = this.canModify()
    this.isAdmin = this.hasAdminRole()
  }

  getCourseInfo(id: any): void
  {
    this.courseService.getOneCourse(id).subscribe(course =>
    {
      this.course = course;
      console.log(this.course)
    })
  }

  canModify(): boolean
  {
    return this.authService.getAdminAndTeacherRole()
  }

  getId(token: any)
  {
    const data = token.split('.');
    return data[1];
  }

  getUserId()
  {
    const userId = localStorage.getItem('id');

    return userId
  }

  registerInCourse(): void
  {
    const userId = this.getUserId();
    this.courseService.signUpInCourse(`/users/${userId}/signupcourse/${this.id}`).subscribe({
      next: () =>
      {
        window.alert('Se realizó correctamente la inscripción')
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        window.alert('Datos incorrectos');
        throw Error(errorMessage);
      },
    })
  }

  isAuth()
  {
    return this.authService.isAuthenticated()
  }

  hasAdminRole()
  {
    return this.authService.getAdminRole()
  }

  delete(id: any)
  {

    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    this.courseService.deleteCourse(`/courses/deletecourse/${id}`).subscribe({
      next: () =>
      {
        alert('Curso eliminado correctamente')
        this.router.navigate(['/cursos'])
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        window.alert('Datos incorrectos');
        throw Error(errorMessage);
      }
    })
  }
}
