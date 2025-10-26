import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.html',
  styleUrl: './details.css',
})
export class Details {

   movie: any;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieById(params['id']).subscribe(data => this.movie = data);
    });
  }

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }
}
