import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import {HeaderPageModule} from "../shared/components/header/header.module";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {
  MovieInformationsModalComponent
} from "../shared/components/modal/movie-informations-modal/movie-informations-modal.component";


@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        Tab2PageRoutingModule,
        HeaderPageModule,
        SharedModule,
        HttpClientModule
    ],
  declarations: [Tab2Page]
})
export class Tab2PageModule {}
