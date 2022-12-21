import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VotesAveragePipe} from "./pipes/votes-average.pipe";
import {MinutesToHoursPipe} from "./pipes/minutes-to-hours.pipe";
import {
  MovieInformationsModalComponent
} from "./components/modal/movie-informations-modal/movie-informations-modal.component";
import {IonicModule} from "@ionic/angular";

@NgModule({
  declarations: [VotesAveragePipe, MinutesToHoursPipe, MovieInformationsModalComponent],
  imports: [
    IonicModule,
    CommonModule
  ],
  exports: [VotesAveragePipe, MinutesToHoursPipe, MovieInformationsModalComponent]
})
export class SharedModule { }
