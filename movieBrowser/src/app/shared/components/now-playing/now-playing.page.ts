import { Component, OnInit } from '@angular/core';
import {MovieTrending, Trending} from "../../models/trending.model";
import {TrendingService} from "../../services/trending.service";
import {MovieNowPlaying, NowPlaying} from "../../models/nowplaying.model";
import {NowPlayingService} from "../../services/now-playing.service";
import {MovieDetailsService} from "../../services/movie-details.service";

@Component({
  selector: 'app-now-playing',
  templateUrl: './now-playing.page.html',
  styleUrls: ['./now-playing.page.scss'],
})
export class NowPlayingPage implements OnInit {
  nowPlayingList! : MovieNowPlaying[];
  isModalOpen! : boolean ;

  constructor(
    private _nowPlayingService : NowPlayingService,
    private _movieDetailsService : MovieDetailsService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._nowPlayingService.getNowPlaying().subscribe({
      next : (data : NowPlaying) => {
        this.nowPlayingList = data.results;
        for (let i=0;i<this.nowPlayingList.length;i++) {
          this.nowPlayingList[i].poster_path = this._nowPlayingService.getMovieNowPlayingImage(this.nowPlayingList[i].poster_path);
        }
      }
    })

    this._movieDetailsService.isOpenObservable.subscribe({
      next : (data : boolean)=> {
        this.isModalOpen = data;
      }
    })
  }

  toogleIsOpen(idMovie : number) {
    this._movieDetailsService.setMovieId(idMovie);
    this._movieDetailsService.toogleIsOpen();
  }

}
