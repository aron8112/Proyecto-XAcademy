import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit
{
  id: any
  constructor(private authService: AuthService) { }

  ngOnInit(): Observable<boolean>
  {
    this.id = this.getId()
    console.log(this.id)
    return this.isLoggedIn()
  }
  isLoggedIn(): Observable<boolean> 
  {
    return this.authService.isAuthenticated()
  }
  logout()
  {
    this.authService.logout()
  }

  getId(): JSON
  {
    const data = this.authService.setUserId()

    return data
  }
}
