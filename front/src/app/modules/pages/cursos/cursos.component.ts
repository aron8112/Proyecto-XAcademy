import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { CoursesService } from './cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit
{
  courses: Icourses[] = [];
  // courseId: string[] = [];
  constructor(private courseService: CoursesService, private router: Router) { }

  ngOnInit(): void
  {
    this.getAllCourses();
  }

  getAllCourses(): void
  {
    this.courseService.getAllCourses().subscribe(courses =>
    {
      this.courses = courses;
    });
  }

  navigate(id: string): void
  {
    this.router.navigate([`/cursos/details/${id}`]);
  }

}
