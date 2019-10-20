import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';
import { MoviesService } from './shared/movies.service';

@Injectable()
export class MovieResolverService implements Resolve<any> {

    constructor(private moviesService: MoviesService) {

    }

    resolve(route: ActivatedRouteSnapshot) {
        // tslint:disable-next-line: no-string-literal
        return this.moviesService.getMovie(route.params['title']);
    }
}
