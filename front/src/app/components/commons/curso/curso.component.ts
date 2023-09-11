import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
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

  constructor(private activatedRoute: ActivatedRoute, private courseService: CoursesService, private authService: AuthService) { }

  id: any;
  isTeacherOrAdmin: any

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>
    {
      this.id = paramMap.get('id')
    });

    this.getCourseInfo(this.id)
    this.isTeacherOrAdmin = this.canModify()
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
}
