import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GerarMapaPageRoutingModule } from './gerar-mapa-routing.module';

import { GerarMapaPage } from './gerar-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GerarMapaPageRoutingModule
  ],
  declarations: [GerarMapaPage]
})
export class GerarMapaPageModule {}
