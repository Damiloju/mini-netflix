import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit {
    movie: any;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            // tslint:disable-next-line: no-string-literal
            this.movie = data['movie'];
        });
    }

    addToFavourites(movie: object) {
        let sessionMovie: any = JSON.parse(sessionStorage.getItem('movie'));
        if (sessionMovie) {
            if (this.movieHasBeenAdded(movie, sessionMovie)) {
                console.log('Movie has been added already');
            } else {
                sessionMovie.push(movie);
                sessionStorage.setItem('movie', JSON.stringify(
                    sessionMovie
                ));
            }

        } else {
            sessionMovie = [];
            sessionMovie.push(movie);
            sessionStorage.setItem('movie', JSON.stringify(
                sessionMovie
            ));
        }

    }

    movieHasBeenAdded(userMovie, movies) {
        return movies.find((movie) => {
            return movie.Title === userMovie.Title;
        });
    }
}
