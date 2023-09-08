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

  createNewCourse(newCourse: NgForm): void
  {
    const body = {
      courseName: newCourse.value.courseName,
      courseStartDate: newCourse.value.courseStartDate,
      courseEndDate: newCourse.value.courseEndDate,
      description: newCourse.value.description,
      shortDescription: newCourse.value.shortDescription,
      amountclasses: newCourse.value.amountclasses,
      schedule: newCourse.value.schedule
    }

    window.alert(JSON.stringify(body))
    console.log(body)
    // this.courseService.createCourse('/courses/create', body).subscribe({
    //   next: () =>
    //   {
    //     window.alert('Curso agregado correctamente')
    //     this.router.navigate(['cursos'])
    //   },
    //   error: (error) =>
    //   {
    //     let errorMessage = 'An error occured retrieving data';
    //     if (error)
    //     {
    //       errorMessage = `Error: code ${error.message}`;
    //     }
    //     window.alert('Datos incorrectos');
    //     throw Error(errorMessage);
    //   },
    // })
  }
}
