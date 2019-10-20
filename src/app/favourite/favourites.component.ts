import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-favourites',
    templateUrl: './favourites.component.html',
})

export class FavouritesComponent implements OnInit {
    movies: any;

    ngOnInit() {
        this.movies = JSON.parse(sessionStorage.getItem('movie'));
    }
}
