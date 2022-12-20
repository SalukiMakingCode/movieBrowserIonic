import {Component, OnInit} from '@angular/core';
import {HeaderPictureHomeService} from "../shared/services/header-picture-home.service";
import {Movie} from "../shared/models/movie.model";
import {MovieDetailsService} from "../shared/services/movie-details.service";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  movie! : Movie;
  urlServerImage : string = this._movieService.urlServerImage;
  isModalOpen! : boolean ;

  constructor(
    private _movieService : HeaderPictureHomeService,
    private _movieDetailsService : MovieDetailsService
  ) {}

  ngOnInit() {
    this._movieService.getOneMovie().subscribe({
      next : (data : Movie) => this.movie = data
    })

    this._movieDetailsService.isOpenObservable.subscribe({
      next : (data : boolean)=> {
        this.isModalOpen = data;
        console.log("dataOnLoad" +data);
      }
    })
  }

  toogleIsOpen() {
    this._movieDetailsService.setMovieId(this.movie.id);
    this._movieDetailsService.toogleIsOpen();
  }
}
