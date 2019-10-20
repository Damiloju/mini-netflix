import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolverService } from './movies/movie-resolver.service';
import { FavouritesComponent } from './favourite/favourites.component';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent, resolve: { movies: MoviesResolverService } },
  { path: 'movies/favourites', component: FavouritesComponent },
  { path: 'movies/:title', component: MovieDetailComponent, resolve: { movie: MovieResolverService } },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
