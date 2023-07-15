import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import {environment} from './../../../environments/environment'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  imagePath = environment.imagePath;
  constructor(private service:MovieApiServiceService) { }
  ngOnInit(): void { 

  }
  searchResult: any=[];
  searchForm = new FormGroup({
    'movieName': new FormControl(null)
  });
  submitForm() {
    console.log(this.searchForm.value, 'searchForm')
    this.service.getSearchMovies(this.searchForm.value)
      .subscribe((result) => {
        console.log("SearchMovies =>", result)
        this.searchResult = result.results
    })
  }
}
