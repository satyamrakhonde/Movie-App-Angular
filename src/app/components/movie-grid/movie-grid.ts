import { Component, Input } from '@angular/core';
import { MovieCard } from '../movie-card/movie-card';

@Component({
  selector: 'app-movie-grid',
  imports: [MovieCard],
  templateUrl: './movie-grid.html',
  styleUrl: './movie-grid.css',
})
export class MovieGrid {
    @Input() movies: any[] = [];
}
