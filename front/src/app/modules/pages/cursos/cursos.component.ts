import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { CoursesService } from './cursos.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit
{
  courses: Icourses[] = [];
  id: any
  // courseId: string[] = [];
  constructor(private courseService: CoursesService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void
  {
    this.getAllCourses();
    this.id = this.getRole()
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

  getRole(): JSON | null
  {
    return this.authService.setUserId()
  }
}
