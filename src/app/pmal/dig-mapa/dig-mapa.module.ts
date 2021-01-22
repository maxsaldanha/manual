import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DigMapaPageRoutingModule } from './dig-mapa-routing.module';

import { DigMapaPage } from './dig-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DigMapaPageRoutingModule
  ],
  declarations: [DigMapaPage]
})
export class DigMapaPageModule {}
