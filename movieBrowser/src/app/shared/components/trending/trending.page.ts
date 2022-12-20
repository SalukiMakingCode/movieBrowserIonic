import { Component, OnInit } from '@angular/core';
import {TrendingService} from "../../services/trending.service";
import {MovieTrending, Trending} from "../../models/trending.model";
import {MovieDetailsService} from "../../services/movie-details.service";

@Component({
  selector: 'app-trending',
  templateUrl: './trending.page.html',
  styleUrls: ['./trending.page.scss'],
})
export class TrendingPage implements OnInit {
  trendingList! : MovieTrending[];
  isModalOpen! : boolean ;

  constructor(
    private _trendingService : TrendingService,
    private _movieDetailsService : MovieDetailsService
  ) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._trendingService.getTrending().subscribe({
      next : (data : Trending) => {
        this.trendingList = data.results;
        for (let i=0;i<this.trendingList.length;i++) {
          this.trendingList[i].poster_path = this._trendingService.getMovieTrendingImage(this.trendingList[i].poster_path);
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






