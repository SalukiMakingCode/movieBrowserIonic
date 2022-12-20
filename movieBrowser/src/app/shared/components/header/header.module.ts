import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPage } from './header.page';
import {HeaderRoutingModule} from "./header-routing.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderRoutingModule
    ],
    exports: [
        HeaderPage
    ],
    declarations: [HeaderPage]
})
export class HeaderPageModule {}
