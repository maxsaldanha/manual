import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoAtendiPageRoutingModule } from './info-atendi-routing.module';

import { InfoAtendiPage } from './info-atendi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoAtendiPageRoutingModule
  ],
  declarations: [InfoAtendiPage]
})
export class InfoAtendiPageModule {}
