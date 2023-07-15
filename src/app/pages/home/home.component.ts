import { Component, HostListener, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import {environment} from './../../../environments/environment'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  imagePath = environment.imagePath;
  bannerResult: any = [];
  trendingMovieResult: any = [];
  constructor(private service: MovieApiServiceService) { }
  ngOnInit(): void {
    this.bannerData();
    this.trendingMovieData()
  }

 //bannerData 
  bannerData() {
    this.service.bannerApiData().subscribe((data) => {
      // console.log("result =>", data)
      this.bannerResult = data?.results
    })
  }

  trendingMovieData() {
    this.service.trendingMoviesApiData().subscribe((data) => {
      console.log("trending Movie data", data)
      this.trendingMovieResult=data?.results
    })
  }
}
