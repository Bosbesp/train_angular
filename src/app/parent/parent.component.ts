import { FormBuilder, Validators } from '@angular/forms';
import { Imovie } from '../movie/model/imovie.model';
import { MovieService } from './../movie/service/movie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  showMessage: string = '';
  inputParent = 'input';
  Movie_id: string = '';
  movieType: string = '';
  moviePrice: Number | undefined;
  movieName: string = '';
  form: any;
  movieData: any;
  id: string ='';

  onNotifyClicked(message: string): void {
    this.showMessage = message;
  }

  public Imovie: Imovie | undefined;
 

  constructor(
    private MovieService: MovieService,
    private FormBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.FormBuilder.group({ id: [''] });
  }

  submitForm(): void {
    this.id = this.form.get('id')?.value;
  }

  GetDetailMovie(List: Imovie): void {
    this.Imovie = List;
    console.log(this.Imovie);
    this.Movie_id = this.Imovie.Movieid;
    this.movieType = this.Imovie.TypeMovie;
    this.moviePrice = this.Imovie.MoviePrice;
    this.movieName = this.Imovie.NameMovie ?? '';
  }
  showMovie() {
    try {
      if (this.Movie_id) {
        this.MovieService.getMovieByID(this.Movie_id).subscribe((res) => {
          this.Imovie = res;
          this.movieData.emit(this.Imovie);
        });
      } else {
        throw new Error('Movie ID not found.');
      }
    } catch (error) {
      alert("Can't find movie ID.");
    }
  }
}
