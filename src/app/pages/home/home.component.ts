import { Component , OnInit } from '@angular/core';
import{MovieApiServiceService} from '../../service/movie-api-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private service:MovieApiServiceService){

  }

  
  popularResult: any=[];
  nowPlayingResult: any=[];
  topRatedResult: any=[];
  upComingResult: any=[];
  activeSlideIndex: number = 0; // Chỉ mục slide active ban đầu
  ngOnInit(): void{
    this.popularData();
    this.nowPlayingData();
    this.topRatedData();
    this.upComingData();
  } // Dữ liệu của carousel
  

  // Phương thức chuyển slide trước
  prevSlide() {
    this.activeSlideIndex = (this.activeSlideIndex === 0) ? this.popularResult.length - 1 : this.activeSlideIndex - 1;
  }

  // Phương thức chuyển slide tiếp theo
  nextSlide() {
    this.activeSlideIndex = (this.activeSlideIndex === this.popularResult.length - 1) ? 0 : this.activeSlideIndex + 1;
  }
  //lấy dữ liệu từ ../../service/movie-api-service.service
  // popular
  popularData(){
    this.service.popularApiData().subscribe((result)=>{
      console.log('This is polular data:',result);
      this.popularResult=result.results;
    })
  }
  // nowplaying
  nowPlayingData(){
    this.service.nowPlayingApiData().subscribe((result)=>{
      console.log('This is now playing data:',result);
      this.nowPlayingResult=result.results;
    })
  }
  //top rated
  topRatedData(){
    this.service.topRatedApiData().subscribe((result)=>{
      console.log('This is polular data:',result);
      this.topRatedResult=result.results;
    })
  }
  // up coming
  upComingData(){
    this.service.upComingApiData().subscribe((result)=>{
      console.log('This is polular data:',result);
      this.upComingResult=result.results;
    })
  }

}

