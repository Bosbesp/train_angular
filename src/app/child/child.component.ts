import { Component, EventEmitter, Output, Input } from '@angular/core';
import { Imovie } from '../movie/model/imovie.model';
import { MovieService } from '../movie/service/movie.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() item= '';
  @Input()parentText : string | undefined;
  constructor(private MovieService : MovieService) {}

  OnInit() {}
  // onClick(): void {
  //   this.notify.emit('Message from child');
  // }

  @Input()movieId! : string;
  @Output() movieData: EventEmitter<Imovie> = new EventEmitter<Imovie>();
  public Imovie!: Imovie ;


  ngOnInit() {
     
  }

  onClicknotify(): void {
      this.notify.emit("Hello From Child");
  }

// function call 
  onClick() {
    try {
      if (this.movieId) {
        this.MovieService.getMovieByID(this.movieId).subscribe((res) => {
          this.Imovie = res;
          this.movieData.emit(this.Imovie);
        });
      } else {
        throw new Error("Movie ID not found.");
      }
    } catch (error) {
      alert("Can't find movie ID.");
    }
  }
  
}
