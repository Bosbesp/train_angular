import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Imovie } from '../model/imovie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://638492184ce192ac605bc39a.mockapi.io/Movie';

  constructor(private http: HttpClient) {}

  getMovieByID(id: string): Observable<Imovie> {
    return this.http.get<Imovie>(`${this.apiUrl}/${id}`).pipe(
      catchError(error => {
        if (error.status === 500) {
          alert(`Movie with ID ${id} not found.`);
        }
        return throwError(error);
      })
    );
  }
}
