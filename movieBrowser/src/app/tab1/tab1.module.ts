import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import {HeaderPageModule} from "../shared/components/header/header.module";
import {TrendingPageModule} from "../shared/components/trending/trending.module";
import {NowPlayingPageModule} from "../shared/components/now-playing/now-playing.module";
import {
  MovieInformationsModalComponent
} from "../shared/components/modal/movie-informations-modal/movie-informations-modal.component";
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    HeaderPageModule,
    TrendingPageModule,
    NowPlayingPageModule,
    SharedModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
