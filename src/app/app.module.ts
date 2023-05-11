import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie/service/movie.service';
import { ParentComponent } from './parent/parent.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    MovieComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [DatePipe, MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
