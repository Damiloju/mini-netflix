import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { HeaderComponent } from './Header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviesService } from './movies/shared/movies.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MoviesResolverService } from './movies/movies-resolver.service';
import { JQ_TOKEN } from './common/jquery.service';
import { SimpleModalComponent } from './common/simpleModal.component';
import { ModalTriggerDirective } from './common/modalTrigger.directive';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieResolverService } from './movies/movie-resolver.service';
import { FavouritesComponent } from './favourite/favourites.component';
import { ToastrService } from './common/toastr.service';
import { LoaderComponent } from './common/loader/loader.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { LoaderService } from './common/loader.service';
import { LoaderInterceptor } from './interceptors/loader.interceptor';


// tslint:disable-next-line: no-string-literal
const jQuery = window['$'];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HeaderComponent,
    MoviesComponent,
    SimpleModalComponent,
    ModalTriggerDirective,
    MovieDetailComponent,
    FavouritesComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule
  ],
  providers: [
    MoviesService,
    MoviesResolverService,
    MovieResolverService,
    ToastrService,
    LoaderService,
    { provide: JQ_TOKEN, useValue: jQuery },
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
