import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-toprated',
  templateUrl: './toprated.component.html',
  styleUrls: ['./toprated.component.less']
})
export class TopratedComponent implements OnInit {

  topRatedMovies: any;

  constructor(public movieService: MovieService) {
    this.movieService.getTopRatedMovies().subscribe(data => {
      this.topRatedMovies = data['results'];
    })
  }

  ngOnInit() {
  }

}
