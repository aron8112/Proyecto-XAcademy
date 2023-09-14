import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../cursos/cursos.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit
{
  mostrarDiv: boolean = true;
  courses: Icourses[] = []

  constructor(private courseService: CoursesService, private authService: AuthService) { }

  ngOnInit(): void
  {
    this.authService.setUserId()
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
