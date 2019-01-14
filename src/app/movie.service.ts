import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = 'YOUR_API_KEY';
  private movieString: string;
  private id: number;

  constructor(public _http: HttpClient) { }

  searchMovie(movie: string) {
    this.movieString = movie;
    return this._http.get(`${this._http.get}search/movie?api_key=${this.apiKey}&language=en-US&query=${this.movieString}&page=1&include_adult=false`)
  }

  getPopularMovies() {
    return this._http.get(`${this.apiUrl}movie/popular?api_key=${this.apiKey}&language=en-US&page=1`)
  }

  getTopRatedMovies() {
    return this._http.get(`${this.apiUrl}movie/top_rated?api_key=${this.apiKey}&language=en-US&page=1`)
  }
}
