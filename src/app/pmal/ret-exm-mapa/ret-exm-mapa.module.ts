import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RetExmMapaPageRoutingModule } from './ret-exm-mapa-routing.module';

import { RetExmMapaPage } from './ret-exm-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RetExmMapaPageRoutingModule
  ],
  declarations: [RetExmMapaPage]
})
export class RetExmMapaPageModule {}
