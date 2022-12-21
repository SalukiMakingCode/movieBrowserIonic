import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Movie} from "../models/movie.model";
import {Router} from "@angular/router";
import {RelatedMovieList} from "../models/relatedMovie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieDetailsService {
  url : string = environment.movieUrl;
  id! : number;
  isOpen : boolean = false;
  isOpenObservable : BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.isOpen);
  idObservable : BehaviorSubject<number> = new BehaviorSubject<number>(this.id);

  constructor(
    private _client : HttpClient,
    private _router : Router
  ) { }

  getMovieInformations() : Observable<Movie> {
    return this._client.get<Movie>(this.url + this.id + environment.keyApi);
  }

  setMovieId(idMovie : number) {
    this.id = idMovie;
    this.idObservable.next(this.id);
  }

  changeMovieIdOnModal(idMovie : number) {
    this.setMovieId(idMovie);
  }

  getRelatedMovieInformations() : Observable<RelatedMovieList> {
    return this._client.get<RelatedMovieList>(this.url + this.id + "/recommendations" + environment.keyApi);
  }

  toogleIsOpen() {
    this.isOpen = !this.isOpen;
    this.isOpenObservable.next(this.isOpen);
  }

  navigateToOneGenreListMovie(genreId : number) {
    //not work
    this.toogleIsOpen();
    this._router.navigate(['tabs/tab2']);
  }

}
