import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {Movie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class HeaderPictureHomeService {
  url : string = "https://api.themoviedb.org/3/movie/333339";
  urlServerImage : string = environment.imageServerMovieDbUrl;

  constructor(
    private _client : HttpClient
  ) { }

  getOneMovie() : Observable<Movie> {
    return this._client.get<Movie>(this.url + environment.keyApi)
  }
}
