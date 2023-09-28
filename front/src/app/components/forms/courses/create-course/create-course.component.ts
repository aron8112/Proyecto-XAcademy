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
    schedule: '',
    image: null
  }

  ngOnInit(): void
  {
  }

  //cambiar el formato de la fecha
  convertDate(date: any)
  {
    const data = date.split('-');
    let month = data[1] - 1
    const newDate = new Date(data[2], month, data[0])
    const result = newDate.toISOString().slice(0, 19).replace('T', ' ')

    return result
  }

  onChange(event: any)
  {
    //console.log(event.target.files[0].name)
    var blob = event.target.files[0].slice(0, event.target.files[0].size, 'image/png');

    const newfile = new File([blob], event.target.files[0].name, { type: 'image/png' })
    console.log(newfile)

    this.model.image = newfile
  }

  createNewCourse(newCourse: NgForm): void
  {
    const newId = crypto.randomUUID()

    //enviar el body
    const body = {
      id: newId,
      courseName: newCourse.value.courseName,
      courseStartDate: this.convertDate(newCourse.value.courseStartDate),
      courseEndDate: this.convertDate(newCourse.value.courseEndDate),
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
        if (this.model.image)
        {
          const token = localStorage.getItem('auth_token');
          this.apiService.setHeader('Authorization', `Bearer ${token}`);

          // const formData = new FormData();
          // formData.append('file', this.model.image);

          const body = {
            file: this.model.image
            // formData
          }

          // Realiza la petición POST para subir la imagen
          this.courseService.modifyCourse(`/courses/create/${newId}/addImage`, body).subscribe((response) =>
          {
            console.log(response)
          });
        }
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
      complete: () =>
      {
        window.alert('Curso agregado correctamente')
        this.router.navigate(['cursos'])
      }
    })
  }
}
