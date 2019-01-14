import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  popularMovies: any;
  searchResult: any;
  movie: any;

  constructor(public movieService: MovieService) {
    this.movieService.getPopularMovies().subscribe(data => {
      this.popularMovies = data['results']
      console.log(data);
    });
  }

  ngOnInit() {
  }

}
