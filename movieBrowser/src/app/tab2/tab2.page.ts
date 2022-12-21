import {Component, OnInit} from '@angular/core';
import {MovieGenreService} from "../shared/services/movie-genre.service";
import {Genre, GenreList} from "../shared/models/genre.model";
import {MovieByGenre, MovieByGenreList} from "../shared/models/movieSearchByGenre";
import {environment} from "../../environments/environment";
import {MovieDetailsService} from "../shared/services/movie-details.service";
import {SearchList, SearchMovie} from "../shared/models/search.model";

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  currentGenreList! : Genre[];
  currentMovieByGenreList! : MovieByGenre[];
  currentSearchList! : SearchMovie[];
  inputValue! : string;
  isModalOpen : boolean = false ;

  constructor(
    private _genreService : MovieGenreService,
    private _movieDetailService : MovieDetailsService
  ) {}

  ngOnInit() {
    this.loadData();
    this.loadDataSearch();

    this._movieDetailService.isOpenObservable.subscribe({
      next : (data : boolean)=> {
        this.isModalOpen = data;
      }
    })
  }

  loadData() {
    this._genreService.getGenreInformations().subscribe({
      next : (data : GenreList)=> {
        this.currentGenreList = data.genres;
    }
    })
  }

  loadDataSearch() {
    this._genreService.getMovieBySearch(this.inputValue).subscribe({
      next : (data : SearchList)=> {
        this.currentSearchList = data.results;
        for (let i = 0; i < this.currentSearchList.length; i++) {
          this.currentSearchList[i].poster_path=environment.imageServerMovieDbUrl + this.currentSearchList[i].poster_path;
        }
      }
    })
  }

  changeInputValue() {
    if (this.inputValue) {
      this.loadDataSearch();
    }
  }

  showMovieByGenre(genreId : number) {
    this._genreService.getMovieByGenre(genreId).subscribe({
      next: (data : MovieByGenreList) =>{
        this.currentMovieByGenreList = data.results;
        for (let i = 0; i < this.currentMovieByGenreList.length; i++) {
          this.currentMovieByGenreList[i].poster_path=environment.imageServerMovieDbUrl + this.currentMovieByGenreList[i].poster_path;
        }
    }
    })

    document.querySelectorAll(".genreMenu").forEach((element)=>{
      element.classList.remove("selected");
      element.classList.add("genreMenu");
    })

    if (document.getElementById("genre" + genreId)) {
      // @ts-ignore
      document.getElementById("genre" + genreId).classList.add("selected");
    }
  }

  checkIfImageExist(path : string) :string {
    if (path !== environment.imageServerMovieDbUrl + "null") {
      return path;
    }

    return "../../../../assets/image/movieNotFound.png";
  }

  toogleIsOpen(idMovie : number) {
    this._movieDetailService.setMovieId(idMovie);
    this._movieDetailService.toogleIsOpen();
  }

}
