import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NegCulturaPageRoutingModule } from './neg-cultura-routing.module';

import { NegCulturaPage } from './neg-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NegCulturaPageRoutingModule
  ],
  declarations: [NegCulturaPage]
})
export class NegCulturaPageModule {}
