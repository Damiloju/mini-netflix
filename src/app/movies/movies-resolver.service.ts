import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { map } from 'rxjs/operators';
import { MoviesService } from './shared/movies.service';

@Injectable()
export class MoviesResolverService implements Resolve<any> {

    constructor(private moviesService: MoviesService) {

    }

    resolve() {
        return this.moviesService.getMovies().pipe(map(results => {
            sessionStorage.setItem('movies', JSON.stringify(results.results));
            return results.results;
        }));
    }
}
