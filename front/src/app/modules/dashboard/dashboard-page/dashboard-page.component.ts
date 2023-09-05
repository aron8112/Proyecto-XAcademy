import { Component } from '@angular/core';
import { ApiService } from 'src/app/core/http/api.service';
import { Icourses } from 'src/app/core/interfaces/Icourses';
import { Ipublication } from 'src/app/core/interfaces/Ipublications';
@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent
{
  constructor(private apiService: ApiService) { }

  cursos: Icourses[] = [];
  publicaciones: Ipublication[] = [];

  showLastCourses() { }
  showLastPublicacions() { }
}
