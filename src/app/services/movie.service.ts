import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'YOUR_API_KEY';

  constructor(private http: HttpClient) {}

  getTrendingMovies() {
    return this.http.get(`${this.apiUrl}/trending/movie/week?api_key=${this.apiKey}`);
  }

  searchMovies(query: string) {
    return this.http.get(`${this.apiUrl}/search/movie?api_key=${this.apiKey}&query=${query}`);
  }

  getMovieById(id: number) {
    return this.http.get(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`);
  }
}
