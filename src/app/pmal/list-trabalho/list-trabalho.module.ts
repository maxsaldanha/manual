import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListTrabalhoPageRoutingModule } from './list-trabalho-routing.module';

import { ListTrabalhoPage } from './list-trabalho.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListTrabalhoPageRoutingModule
  ],
  declarations: [ListTrabalhoPage]
})
export class ListTrabalhoPageModule {}
