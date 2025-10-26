import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {

  @Input() movie: any;

  constructor(private router: Router) {}

  getPosterUrl(path: string): string {
    return path ? `https://image.tmdb.org/t/p/w500${path}` : 'assets/no-poster.png';
  }

  goToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
}
