import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {VotesAveragePipe} from "./pipes/votes-average.pipe";
import {MinutesToHoursPipe} from "./pipes/minutes-to-hours.pipe";

@NgModule({
  declarations: [VotesAveragePipe, MinutesToHoursPipe],
  imports: [
    CommonModule
  ],
  exports: [VotesAveragePipe, MinutesToHoursPipe]
})
export class SharedModule { }
