import { Component, OnInit } from '@angular/core';
import { MovieDetailsService } from "../../../services/movie-details.service";
import { Movie } from "../../../models/movie.model";
import { environment } from "../../../../../environments/environment";
import { RelatedMovie, RelatedMovieList } from "../../../models/relatedMovie.model";

@Component({
  selector: 'app-movie-informations-modal',
  templateUrl: './movie-informations-modal.component.html',
  styleUrls: ['./movie-informations-modal.component.scss'],
})
export class MovieInformationsModalComponent implements OnInit {
  currentMovie!: Movie;
  isModalOpen!: boolean;
  serverImage!: string;
  relatedMovieList!: RelatedMovie[];

  constructor(
    private _movieInformation: MovieDetailsService
  ) { }

  ngOnInit() {
    this.loadData();
    this.isModalOpen = this._movieInformation.isOpen;
    this.serverImage = environment.imageServerMovieDbUrl;
  }

  loadData() {
    this._movieInformation.getMovieInformations().subscribe({
      next: (data: Movie) => {
        this.currentMovie = data;
      }
    })

    this._movieInformation.getRelatedMovieInformations().subscribe({
      next: (data: RelatedMovieList) => {
        this.relatedMovieList = data.results;
        for (let i = 0; i < this.relatedMovieList.length; i++) {
          this.relatedMovieList[i].poster_path = environment.imageServerMovieDbUrl + this.relatedMovieList[i].poster_path

        }
      }
    })

  }

  toogleIsOpen() {
    this._movieInformation.toogleIsOpen();
    this.isModalOpen = this._movieInformation.isOpen;
  }

  showRelatedMovieDetails(idMovie : number) {
    this._movieInformation.changeMovieIdOnModal(idMovie);
    this.loadData();
  }

  checkIfImageExist(path : string) :string {
    if (path !== environment.imageServerMovieDbUrl + "null") {
      return path;
    }

    return "../../../../assets/image/movieNotFound.png";
  }
}
