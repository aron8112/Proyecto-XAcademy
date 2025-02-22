import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';
import { User } from 'src/app/core/interfaces/user';

@Injectable({
    providedIn: 'root'
})
export class UserService
{
    constructor(private apiService: ApiService) { }

    getAllUser(): Observable<User[]>
    {
        return this.apiService.get<User[]>('/users/all')
            .pipe(
                catchError(this.handleError<User[]>('getUser', [])),
            );
    }

    getOneUser(id: Params): Observable<User>
    {
        console.log(id)
        return this.apiService.get<User>(`/users/${id}`)
            .pipe(
                catchError(this.handleError<User>('getUser')),
            );
    }

    incrementAttendance(userId: string, courseId: string)
    {
        return this.apiService.put(`/users/${userId}/courseatt/${courseId}`).pipe(
            catchError(this.handleError<User>('getUser')),
        );
    }

    changeEnroll(userId: string, courseId: string)
    {
        return this.apiService.put(`/users/${userId}/courseenroll/${courseId}`).pipe(
            catchError(this.handleError<User>('getUser')),
        );
    }

    deleteUserCourse(userId: string, courseId: string)
    {
        return this.apiService.delete(`users/deleteuserincourse/${userId}/${courseId}`).pipe(
            catchError(this.handleError<User>('getUser')),
        );
    }

    private handleError<T>(operation = 'operation', result?: T)
    {
        return (error: any): Observable<T> =>
        {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

}
