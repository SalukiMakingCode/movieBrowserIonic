import {Component, OnInit} from '@angular/core';
import {HeaderPictureHomeService} from "../shared/services/header-picture-home.service";
import {Movie} from "../shared/models/movie.model";
import {environment} from "../../environments/environment";


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  movie! : Movie;
  urlServerImage : string = this._movieService.urlServerImage;

  constructor(
    private _movieService : HeaderPictureHomeService
  ) {}

  ngOnInit() {
    this._movieService.getOneMovie().subscribe({
      next : (data : Movie) => this.movie = data
    })
  }

}
