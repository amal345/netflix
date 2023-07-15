import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.apiurl;
  apiKey = environment.apikey;

  //bannerapidata

  bannerApiData(): Observable<any> { 
    return this.http.get(`${this.baseUrl}/trending/all/week?api_key=${this.apiKey}`);
  }
}
