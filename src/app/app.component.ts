import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  searchResult: any;
  movie: any;

  title = 'movie-track';

  constructor(public movieService: MovieService) { }

  searchMovie() {
    this.movieService.searchMovie(this.movie).subscribe(data => {
      this.searchResult = data['results']
    });
  }
}
