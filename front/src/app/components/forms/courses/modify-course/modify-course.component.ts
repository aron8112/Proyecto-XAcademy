import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { AuthService } from 'src/app/core/services/auth.service';
import { CoursesService } from 'src/app/modules/pages/cursos/cursos.service';

@Component({
  selector: 'app-modify-course',
  templateUrl: './modify-course.component.html',
  styleUrls: ['./modify-course.component.css']
})
export class ModifyCourseComponent implements OnInit
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

  model: Icourses = {
    courseName: new String,
    courseStartDate: new Date,
    courseEndDate: new Date,
    description: new Text,
    shortDescription: new Text,
    attendance: new Number,
    amountclasses: new Number,
    schedule: new String,
  }

  constructor(private activatedRoute: ActivatedRoute, private courseService: CoursesService, private authService: AuthService, private apiService: ApiService, private router: Router) { }

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
    this.changeDates()
  }

  getCourseInfo(id: any): void
  {
    this.courseService.getOneCourse(id).subscribe(course =>
    {
      this.course = course;
    })
  }

  canModify(): boolean
  {
    return this.authService.getAdminAndTeacherRole()
  }

  changeDates()
  {
    this.model.courseStartDate.getTimezoneOffset()
    this.model.courseEndDate.getTimezoneOffset()
  }

  sendChanges(form: NgForm): void
  {
    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    const body = form.value

    this.courseService.modifyCourse(`/courses/modify/${this.id}`, body).subscribe({
      next: () =>
      {
        window.alert('Curso modificado correctamente')
        this.router.navigate(['cursos'])
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

  convertDate(date: any)
  {
    const data = date.split('-');
    let month = data[1] - 1
    const newDate = new Date(data[2], month, data[0])
    const result = newDate.toISOString().slice(0, 19).replace('T', ' ')

    return result;
  }

  sendStartDates(form: NgForm)
  {
    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    let setDate = this.convertDate(form.value.courseStartDate)
    const body = { courseStartDate: setDate }

    this.courseService.modifyCourse(`/courses/modify/${this.id}`, body).subscribe({
      next: () =>
      {
        window.alert('Curso modificado correctamente')
        this.router.navigate(['cursos'])
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

  sendEndDates(form: NgForm)
  {
    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    let setDate = this.convertDate(form.value.courseEndDate)
    const body = { courseEndDate: setDate }

    this.courseService.modifyCourse(`/courses/modify/${this.id}`, body).subscribe({
      next: () =>
      {
        window.alert('Curso modificado correctamente')
        this.router.navigate(['cursos'])
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
