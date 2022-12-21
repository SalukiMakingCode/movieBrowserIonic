import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {GenreList} from "../models/genre.model";
import {environment} from "../../../environments/environment";
import {Observable} from "rxjs";
import {MovieByGenreList} from "../models/movieSearchByGenre";
import {SearchList} from "../models/search.model";

@Injectable({
  providedIn: 'root'
})
export class MovieGenreService {
  url : string = environment.genreMovieUrl + environment.keyApi;
  urlMovieByGenre : string = environment.movieByGenreUrl;
  urlMovieBySearch : string = environment.movieBySearchUrl;

  constructor(
    private _client : HttpClient
  ) { }

  getGenreInformations() : Observable<GenreList> {
    return this._client.get<GenreList>(this.url);
  }

  getMovieByGenre(idGenre : number) : Observable<MovieByGenreList> {
    return this._client.get<MovieByGenreList>(this.urlMovieByGenre + idGenre);
  }

  getMovieBySearch(search : string) : Observable<SearchList> {
      return this._client.get<SearchList>(this.urlMovieBySearch + search);
  }
}
