import { Component, OnInit } from '@angular/core';
import { Ipublication } from 'src/app/core/interfaces/Ipublications';
import { PublicationsService } from './publicaciones.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

publications : Ipublication[] = [];
id : any;


  constructor(private publicationService: PublicationsService, private router: Router, private authService: AuthService) { }

  ngOnInit(): void
  {
    this.getAllPublications();
    //this.id = this.getRole()
  }

  getAllPublications(): void
  {
    this.publicationService.getAllPublications().subscribe(publications =>
    {
      this.publications = publications;
    });
  }

}
