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
}
