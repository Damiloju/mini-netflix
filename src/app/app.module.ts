import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { HeaderComponent } from './Header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/shared/movies.service';
import { HttpClientModule } from '@angular/common/http';
import { MoviesResolverService } from './movies/movies-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    MoviesService,
    MoviesResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
