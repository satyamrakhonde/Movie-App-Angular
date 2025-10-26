import { Component } from '@angular/core';
import { Header } from '../../components/header/header';
import { MovieGrid } from "../../components/movie-grid/movie-grid";
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-home',
  imports: [Header, MovieGrid],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.loadTrending();
  }

  loadTrending() {
    this.movieService.getTrendingMovies().subscribe((data: any) => {
      this.movies = data.results;
    });
  }

    searchMovies(query: string) {
      if(query.trim() === '') return this.loadTrending();
      this.movieService.searchMovies(query).subscribe((data: any) => {
        this.movies = data.results;
      });
    }

}
