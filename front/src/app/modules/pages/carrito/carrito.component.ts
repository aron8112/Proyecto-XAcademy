import { Component, OnInit } from '@angular/core';
import { getMatIconFailedToSanitizeUrlError } from '@angular/material/icon';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit
{
  id: any


  user: any
  
  constructor(private userService: UserService, private authService: AuthService, private apiService: ApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>
    {
      this.id = paramMap.get('id')
    });
    console.log(this.id)
    this.getUser(this.id)
  }

  getUser(id: any): void
  {
    this.userService.getOneUser(id).subscribe(user =>
    {
      this.user = user
      console.log(user)
    })
  }


}
