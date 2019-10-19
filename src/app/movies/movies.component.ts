import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';

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
}
