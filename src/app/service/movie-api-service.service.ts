import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiurl;
  apiKey = environment.apikey;

  //bannerapidata

  bannerApiData(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }

  // trendingMoviesApiData
  trendingMoviesApiData(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/trending/movie/day?api_key=${this.apiKey}`);
  }

  getSearchMovies(data: any): Observable<any> { 
    console.log("dataquery", data.movieName);
    return this.http.get(`${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${data.movieName}`);
  }

}
