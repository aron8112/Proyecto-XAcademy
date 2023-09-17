import { Ipublication } from 'src/app/core/interfaces/Ipublications';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { ApiService } from 'src/app/core/http/api.service';

@Injectable({
    providedIn: 'root'
})
export class PublicationsService
{
    constructor(private apiService: ApiService) { }

    getAllPublications(): Observable<Ipublication[]>
    {
        return this.apiService.get<Ipublication[]>('/publications/all')
            .pipe(
                catchError(this.handleError<Ipublication[]>('getPublications', [])),
            );
    }

    getOneCourse(id: Params)
    {
        return this.apiService.get<Ipublication>(`/publications/${id}`)
            .pipe(
                catchError(this.handleError<Ipublication>('getPublication')),
            );
    }

    createpublication(url: string, body?: any): Observable<Ipublication>
    {
        return this.apiService.post<Ipublication>(url, body).pipe(
            catchError(this.handleError<Ipublication>('newPublication')),
        );
    }


    deletePublication(url: string): Observable<any> 
    {
        return this.apiService.delete(url).pipe(
            catchError(this.handleError<Ipublication>('deletePublication')))
    }

    modifyPublications(url: string, body: any): Observable<Ipublication>
    {
        return this.apiService.put(url, body)
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
