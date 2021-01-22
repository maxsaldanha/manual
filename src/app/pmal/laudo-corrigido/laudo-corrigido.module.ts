import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaudoCorrigidoPageRoutingModule } from './laudo-corrigido-routing.module';

import { LaudoCorrigidoPage } from './laudo-corrigido.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaudoCorrigidoPageRoutingModule
  ],
  declarations: [LaudoCorrigidoPage]
})
export class LaudoCorrigidoPageModule {}
