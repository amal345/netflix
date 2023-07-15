import { Component, OnInit } from '@angular/core';
import { MovieApiService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  constructor(private service: MovieApiService) { }
  ngOnInit(): void {
    this.bannerData()
  }

 //bannerData 
  bannerData() {
    this.service.bannerApiData().subscribe(data =>
      console.log(data,"bannerresulr#")
    )
  }
}
