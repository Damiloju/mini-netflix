import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { IMovies } from './shared/movies.model';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})

export class MoviesComponent implements OnInit {
    movies: any;

    constructor(private moviesService: MoviesService) {
    }

    ngOnInit() {
        this.moviesService.getMovies().subscribe(results => this.movies = results.results);
    }

    getMovie(id: number): any {
        // tslint:disable-next-line: no-use-before-declare
        return this.movies.find(movie => movie.objectId === id);
    }
}
