import { Imovie } from './model/imovie.model';

import { Component } from '@angular/core';

import { MovieService } from './service/movie.service';
MovieService;
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent {
  public Imovie: Imovie[] = [];

  id: string = '';

  constructor(private MovieService: MovieService) {}
  ngOnInit(): void {}

  showMovie() {
    this.MovieService.getMovieByID(this.id).subscribe((res) => {
      this.Imovie = JSON.parse(JSON.stringify(res));
      console.log(this.Imovie);
    });
  }
}
