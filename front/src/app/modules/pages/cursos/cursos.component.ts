import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { CoursesService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit
{
  courses: Icourses[] = [];
  // courseId: string[] = [];
  constructor(private courseService: CoursesService) { }

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

}
