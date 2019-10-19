import { Component } from '@angular/core';
import { MoviesService } from '../movies/shared/movies.service';

@Component({
    selector: 'app-nav-bar',
    templateUrl: './navbar.component.html',
})

export class NavBarComponent {
    searchTerm = '';
    foundMovies: any = [];

    constructor(private moviesService: MoviesService) {

    }

    searchMovies(term) {
        this.moviesService.searchMovies(term).subscribe((movies) => {
            this.foundMovies = movies.Search;
        });
    }
}
