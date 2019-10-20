import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';

@Component({
    selector: 'app-movie-detail',
    templateUrl: './movie-detail.component.html',
})

export class MovieDetailComponent implements OnInit {
    movie: any;

    constructor(private route: ActivatedRoute, private toastr: ToastrService) {
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
                this.toastr.warning('Movie has been added to list already');
            } else {
                sessionMovie.push(movie);
                sessionStorage.setItem('movie', JSON.stringify(
                    sessionMovie
                ));
                this.toastr.success('Movie has been added to Favourites');
            }

        } else {
            sessionMovie = [];
            sessionMovie.push(movie);
            sessionStorage.setItem('movie', JSON.stringify(
                sessionMovie
            ));
            this.toastr.success('Movie has been added to Favourites');

        }

    }

    movieHasBeenAdded(userMovie, movies) {
        return movies.find((movie) => {
            return movie.Title === userMovie.Title;
        });
    }
}
