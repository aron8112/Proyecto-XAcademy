import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/core/http/api.service';
import { Ipublication } from 'src/app/core/interfaces/Ipublications';
import { AuthService } from 'src/app/core/services/auth.service';
import { UserService } from 'src/app/modules/pages/carrito/user.service';
import { PublicationsService } from 'src/app/modules/pages/publicaciones/publicaciones.service';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  id : any;
  publication: Ipublication = {
  id: new String,
  title: new String,
  description: new Text,
  image: new String,
  start_date: new Date,
  finish_date: new Date
  }

  user: any;
  isAdmin: any

  constructor(private activatedRoute: ActivatedRoute,
    private publicationService: PublicationsService,
    private authService: AuthService,
    private router: Router,
    private apiService: ApiService) { }


    ngOnInit(): void
    {
      this.activatedRoute.paramMap.subscribe(paramMap =>
      {
        this.id = paramMap.get('id')
      });
  
      this.getPublicationInfo(this.id)
      this.isAdmin = this.canModify()
      this.isAdmin = this.hasAdminRole()
    }
  
    getPublicationInfo(id: any): void
    {
      this.publicationService.getOnePublication(id).subscribe(publication =>
      {
        this.publication = publication;
        console.log(this.publication)
      })
    }
  
    canModify(): boolean
    {
      return this.authService.getAdminRole();
    }
  

    isAuth()
    {
      return this.authService.isAuthenticated()
    }
  
    hasAdminRole()
    {
      return this.authService.getAdminRole()
    }
  
    delete(id: any)
    {
  
      const token = localStorage.getItem('auth_token');
      this.apiService.setHeader('Authorization', `Bearer ${token}`)
  
      this.publicationService.deletePublication(`/publications/deletepublication/${id}`).subscribe({
        next: () =>
        {
          alert('Curso eliminado correctamente')
          this.router.navigate(['/publicaciones'])
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
        }
      })
    }
  }
  


