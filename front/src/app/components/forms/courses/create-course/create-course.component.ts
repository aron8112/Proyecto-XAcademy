import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../../../modules/pages/cursos/cursos.service";
import { Router } from '@angular/router';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { NgForm } from '@angular/forms';
import { ApiService } from 'src/app/core/http/api.service';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit
{

  constructor(private courseService: CoursesService, private router: Router, private apiService: ApiService) { }

  model: any = {
    courseName: '',
    courseStartDate: '',
    courseEndDate: '',
    description: '',
    shortDescription: '',
    amountclasses: 0,
    schedule: ''
  }

  ngOnInit(): void
  {
  }

  convertDate(date: any)
  {
    const newdate = date.split('-');
    return new Date(newdate[2], newdate[1], newdate[0])
  }
  createNewCourse(newCourse: NgForm): void
  {

    //cambiar el formato de la fecha
    const startDate = this.convertDate(newCourse.value.courseStartDate)
    const endDate = this.convertDate(newCourse.value.courseEndDate)

    //enviar el body
    const body = {
      courseName: newCourse.value.courseName,
      courseStartDate: startDate.toISOString().slice(0, 19).replace('T', ' '),
      courseEndDate: endDate.toISOString().slice(0, 19).replace('T', ' '),
      description: newCourse.value.description,
      shortDescription: newCourse.value.shortDescription,
      amountclasses: newCourse.value.amountclasses,
      schedule: newCourse.value.schedule
    }


    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    //hacer la petición POST 
    this.courseService.createCourse('/courses/create', body).subscribe({
      next: () =>
      {
        window.alert('Curso agregado correctamente')
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
