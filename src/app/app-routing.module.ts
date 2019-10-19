import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviesResolverService } from './movies/movies-resolver.service';


const routes: Routes = [
  { path: 'movies', component: MoviesComponent, resolve: { movies: MoviesResolverService } },
  { path: '', redirectTo: '/movies', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
