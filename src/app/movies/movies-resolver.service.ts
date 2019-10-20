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
            return results.results;
        }));
    }
}
