import { Component, OnInit } from '@angular/core';
import { MoviesService } from './shared/movies.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
})

export class MoviesComponent implements OnInit {
    movies: any;

    constructor(private moviesService: MoviesService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.movies = this.route.snapshot.data.movies;
    }

    handleThumbnailClick(name: string) {
        console.log(this.moviesService.getMovie(name));
    }
}
