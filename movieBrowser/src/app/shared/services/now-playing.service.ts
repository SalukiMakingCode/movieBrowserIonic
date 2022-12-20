import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {NowPlaying} from "../models/nowplaying.model";

@Injectable({
  providedIn: 'root'
})
export class NowPlayingService {
  url : string = environment.nowPlayingMovieUrl;
  urlServerImage : string = environment.imageServerMovieDbUrl;

  constructor(
    private _client : HttpClient
  ) { }

  getNowPlaying() : Observable<NowPlaying> {
    return this._client.get<NowPlaying>(this.url);
  }

  getMovieNowPlayingImage(pathImage:string) :string {
    return this.urlServerImage + pathImage;
  }
}
