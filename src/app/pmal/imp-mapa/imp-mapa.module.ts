import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ImpMapaPageRoutingModule } from './imp-mapa-routing.module';

import { ImpMapaPage } from './imp-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ImpMapaPageRoutingModule
  ],
  declarations: [ImpMapaPage]
})
export class ImpMapaPageModule {}
