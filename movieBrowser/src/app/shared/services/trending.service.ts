import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Trending} from "../models/trending.model";

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  url : string = environment.tredingMovieUrl;
  urlServerImage : string = environment.imageServerMovieDbUrl;

  constructor(
    private _client : HttpClient
  ) { }

  getTrending() : Observable<Trending> {
    return this._client.get<Trending>(this.url + environment.keyApi);
  }

  getMovieTrendingImage(pathImage:string) :string {
    return this.urlServerImage + pathImage;
  }
}
