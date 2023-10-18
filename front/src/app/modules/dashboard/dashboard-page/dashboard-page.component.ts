import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { CoursesService } from '../../pages/cursos/cursos.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from '../../pages/carrito/user.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent
{
  constructor(private courseService: CoursesService, private authService: AuthService, private userService: UserService, private apiService: ApiService)
  {
  }

  id: any

  cursos: any;

  ngOnInit(): void
  {
    this.getallws()
    this.id = this.getId()
  }

  getallws()
  {
    return this.courseService.getAllWS().subscribe(courses =>
    {
      this.cursos = courses;
    });
  }

  isEmpty(array: [])
  {
    if (array.length === 0)
    {
      return true
    }
    return false
  }

  getId(): void
  {
    return this.authService.setUserId()
    // this.authService.getUserId().subscribe((userId: string) =>
    // {
    //   this.id = userId
    // })
  }

  incrementAtt(userId: string, courseId: string)
  {
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)
    console.log(`userid: ${userId} y courseId: ${courseId}`)

    this.userService.incrementAttendance(userId, courseId).subscribe({
      next: (response) =>
      {
        this.getallws()
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        console.log(errorMessage)
      },
    })
  }

  enrollChange(userId: string, courseId: string)
  {
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)
    this.userService.changeEnroll(userId, courseId).subscribe({
      next: (response) =>
      {
        this.getallws()
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        console.log(errorMessage)
      },
    })
  }

  deleteUserInCourse(userid: string, courseid: string)
  {
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)
    this.userService.deleteUserCourse(userid, courseid).subscribe({
      next: (response) =>
      {
        this.getallws()
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        console.log(errorMessage)
      },
    })
  }
}
