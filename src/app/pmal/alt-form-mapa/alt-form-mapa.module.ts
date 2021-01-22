import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AltFormMapaPageRoutingModule } from './alt-form-mapa-routing.module';

import { AltFormMapaPage } from './alt-form-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AltFormMapaPageRoutingModule
  ],
  declarations: [AltFormMapaPage]
})
export class AltFormMapaPageModule {}
