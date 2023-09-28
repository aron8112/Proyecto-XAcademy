import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { PublicationsService } from 'src/app/modules/pages/publicaciones/publicaciones.service';

@Component({
  selector: 'app-create-publications',
  templateUrl: './create-publications.component.html',
  styleUrls: ['./create-publications.component.css']
})
export class CreatePublicationsComponent implements OnInit {

  constructor(private publicationService: PublicationsService, private router: Router, private apiService: ApiService) { }

  model: any = {
    publicationTitle: '',
    description: '',
    image: '',
    publicationStartDate: '',
    publicationEndDate: '',
  }

  ngOnInit(): void
  {
  }

  convertDate(date: any)
  {
    const newdate = date.split('-');
    return new Date(newdate[2], newdate[1], newdate[0])
  }

  createNewPublication(newPublication: NgForm): void {

    const startDate = this.convertDate(newPublication.value.publicationStartDate)
  
    //enviar el body
    const body = {
      publicationTitle: newPublication.value.publicationTitle,
      description: newPublication.value.description,
      //image: newPublication.value.image,
      image: "img",
      publicationStartDate: startDate.toISOString().slice(0, 19).replace('T', ' '),
      publicationEndDate: startDate.toISOString().slice(0, 19).replace('T', ' '),
    }

    

    console.log(body);
    //enviar el header con el token
    const token = localStorage.getItem('auth_token');
    this.apiService.setHeader('Authorization', `Bearer ${token}`)

    //hacer la petición POST 
    this.publicationService.createpublication('/publications/create', body).subscribe({
      next: () =>
      {
        window.alert('Publicacion creada correctamente')
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



