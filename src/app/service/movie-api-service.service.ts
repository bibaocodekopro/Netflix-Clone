import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{Observable, Observer} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }
    baseurl = "https://api.themoviedb.org/3";
    apikey="00fbf59a00d68b7204a5336a457cebf9";
     //popular api data
     popularApiData(): Observable<any>{
      return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}&language=en-US&page=1 
      `)
    }
    //now playing data
    nowPlayingApiData(): Observable<any>{
      return this.http.get(`${this.baseurl}/movie/now_playing?api_key=${this.apikey}&language=en-US&page=1 
      `)
    }
    //upcoming data
    upComingApiData(): Observable<any>{
      return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}&language=en-US&page=1 
      `)
    }
    // TOP RATED DATA
    topRatedApiData(): Observable<any>{
      return this.http.get(`${this.baseurl}/movie/top_rated?api_key=${this.apikey}&language=en-US&page=1 
      `)
    }
     // SEARCH DATA
     searchApiData(data:any): Observable<any>{
      return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}
      `)
    }

    //GET MOVIE DETAILS
    getMovieDetails(data: any): Observable<any> {
      return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
    }
  

     // getMovieVideo
     getMovieVideo(data: any): Observable<any> {
      return this.http.get(`${this.baseurl}/movie/${data}/videos?api_key=${this.apikey}`)
    }

  // getMovieCast
  getMovieCast(data: any): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
}