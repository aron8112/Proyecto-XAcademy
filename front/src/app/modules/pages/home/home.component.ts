import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../cursos/cursos.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  mostrarDiv: boolean = true;
  courses: Icourses[] = []

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void
  {
    this.showCourses()
  }

  cambiar(estado: any): void
  {
    console.log("DEL HOME", estado);
    this.mostrarDiv = estado;
  }

  showCourses()
  {
    return this.courseService.getAllCourses().subscribe(courses =>
    {
      this.courses = courses;
    });
  }

}
