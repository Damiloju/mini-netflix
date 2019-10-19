import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { IMovies } from './movies.model';

@Injectable()
export class MoviesService {
    constructor(private http: HttpClient) {

    }
    getMovies(): Observable<IMovies> {
        return this.http.get<IMovies>('https://guides.peruzal.com/xamarin-forms-guide/files/movies.json')
            // tslint:disable-next-line: no-use-before-declare
            .pipe(catchError(this.handleError<IMovies>('getMovies', { results: [] })));
    }

    getMovie(name: string): Observable<any> {
        // tslint:disable: no-use-before-declare
        return this.http.get<object>(`http://www.omdbapi.com/?t=${name}&apikey=41560cc6`)
            // tslint:disable-next-line: no-use-before-declare
            .pipe(catchError(this.handleError<object>('getMovie', {})));
    }

    searchMovies(term: string): Observable<any> {
        return this.http.get<object>(`http://www.omdbapi.com/?s=${term}&apikey=41560cc6`)
            // tslint:disable-next-line: no-use-before-declare
            .pipe(catchError(this.handleError<object>('searchMovies', {})));
    }

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.error(error);
            return of(result as T);
        };
    }
}