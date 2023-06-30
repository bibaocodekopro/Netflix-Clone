import { FormControl,FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent   {
  constructor(private service:MovieApiServiceService,private location: Location){
 
  }
  searchResult:any;
 
  searchForm = new FormGroup({'movieName':new FormControl(null)});
  submitForm()
{
    console.log(this.searchForm.value,'searchform#');
    this.service.searchApiData(this.searchForm.value).subscribe((result)=>{
      console.log(result);
      this.searchResult = result.results;
    })
}
  PreviousUrl(){
    this.location.back();
  }
}
