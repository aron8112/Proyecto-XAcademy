import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/interfaces/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit
{
  @Output() newItemEvent = new EventEmitter<boolean>();
  @Input() estado: boolean | undefined;

  constructor(private apiService: ApiService, private router: Router) { }

  model: User = {
    email: '',
    password: ''
  }
  ngOnInit(): void
  {
  }

  changeEstado(): void
  {
    if (this.estado)
    {
      this.newItemEvent.emit(false);
    } else
    {
      this.newItemEvent.emit(true);
    }
  }

  logIn(form: NgForm): void
  {
    localStorage.removeItem('auth_token')
    const body = {
      email: form.value.email,
      password: form.value.password,
    }


    this.apiService.post<any>('/users/login', body).subscribe({
      next: (response) =>
      {
        localStorage.setItem('auth_token', response.foundUser);
        this.apiService.setHeader('Authorization', `Bearer ${response.foundUser}`)
        console.log(response)
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
      complete: () => { this.router.navigate(['cursos']); }
    })
  }

  logout(): void
  {
    this.router.navigate(['/login']).then(() =>
    {
      localStorage.removeItem('auth_token');
    });
  }
}

// constructor(private http: HttpClient, private route: Router) {}

//   login(usuario: AuthenticationRequest): Observable<AuthenticationResponse> {
//     localStorage.removeItem('auth_token')
//     return this.http
//       .post<AuthenticationResponse>('http://localhost:8080/auth/login', usuario, this.httpOptions)
//       .pipe(
//         map((user : AuthenticationResponse) => {
//           this.setToken(user.jwt);
//           this.loggedIn.next(true);
//           this.student.next(user.isStudent);
//           this.userName.next(user.username);
//           this.userId.next(user.id);

//           return user;
//         }),
//         catchError((err) => this.handlerError(err))
//       );

//   }
//   getToken(){
//     // this.cookieService.get('auth_token');
//     localStorage.getItem('auth_token');
//   }

//   setToken(token: string){
//     // this.cookieService.set('auth_token', token);
//     localStorage.setItem('auth_token', token);
//   }
//   logout():void{
//     this.route.navigate(['/login']).then(()=>{
//       localStorage.removeItem('auth_token');
//       this.loggedIn.next(false);
//       this.student.next(false);
//     });
//   }
//   handlerError(err : any):Observable<never>{
//     let errorMessage = 'An error occured retrieving data';
//     if(err){
//       errorMessage = `Error: code ${err.message}`;
//     }
//     window.alert('Datos incorrectos');
//     return throwError(errorMessage);
//   }