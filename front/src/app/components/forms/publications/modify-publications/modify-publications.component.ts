import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Ipublication } from 'src/app/core/interfaces/Ipublications';
import { AuthService } from 'src/app/core/services/auth.service';
import { PublicationsService } from 'src/app/modules/pages/publicaciones/publicaciones.service';

@Component({
  selector: 'app-modify-publications',
  templateUrl: './modify-publications.component.html',
  styleUrls: ['./modify-publications.component.css']
})
export class ModifyPublicationsComponent implements OnInit {

  publication: Ipublication = {
    id: new String,
    title: new String,
    description: new Text,
    image: new String,
    start_date: new Date,
    finish_date: new Date,
  }

  model: Ipublication = {
    id: new String,
    title:new  String,
    description: new Text,
    image: new String,
    start_date: new Date,
    finish_date: new Date,
  }

  constructor(private activatedRoute: ActivatedRoute, private publicationService: PublicationsService, private authService: AuthService, private apiService: ApiService, private router: Router) { }

  id: any;
  isAdmin: any

  ngOnInit(): void
  {
    this.activatedRoute.paramMap.subscribe(paramMap =>
    {
      this.id = paramMap.get('id')
    });

    this.getPublicationInfo(this.id)
    this.isAdmin = this.canModify()
    this.changeDates()
  }

  getPublicationInfo(id: any): void
  {
    this.publicationService.getOnePublication(id).subscribe(publication =>
    {
      this.publication = publication;
    })
  }

  canModify(): boolean
  {
    return this.authService.getAdminRole()
  }

  changeDates()
  {
    this.model.start_date.getTimezoneOffset()
    this.model.finish_date.getTimezoneOffset()
  }

  convertDate(date: any)
  {
    const newdate = date.split('-');
    return new Date(newdate[2], newdate[1], newdate[0])
  }

  sendChanges(form: NgForm): void
  {
    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    const body = form.value

    this.publicationService.modifyPublications(`/publications/modify/${this.id}`, body).subscribe({
      next: () =>
      {
        window.alert('Publicacion modificada correctamente')
        this.router.navigate(['publicaciones'])
      },
      error: (error) =>
      {
        let errorMessage = 'An error occured retrieving data';
        if (error)
        {
          errorMessage = `Error: code ${error.message}`;
        }
        window.alert('Datos incorrectos');
        throw Error(errorMessage);
      },
    })
  }

}



