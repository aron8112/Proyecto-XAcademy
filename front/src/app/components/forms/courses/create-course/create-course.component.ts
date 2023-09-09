import { Component, OnInit } from '@angular/core';
import { CoursesService } from "../../../../modules/pages/cursos/cursos.service";
import { Router } from '@angular/router';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.css']
})
export class CreateCourseComponent implements OnInit
{

  constructor(private courseService: CoursesService, private router: Router) { }

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

    const startDate = this.convertDate(newCourse.value.courseStartDate)
    const endDate = this.convertDate(newCourse.value.courseEndDate)
    const body = {
      courseName: newCourse.value.courseName,
      courseStartDate: startDate.toISOString().slice(0, 19).replace('T', ' '),
      courseEndDate: endDate.toISOString().slice(0, 19).replace('T', ' '),
      description: newCourse.value.description,
      shortDescription: newCourse.value.shortDescription,
      amountclasses: newCourse.value.amountclasses,
      schedule: newCourse.value.schedule
    }

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
