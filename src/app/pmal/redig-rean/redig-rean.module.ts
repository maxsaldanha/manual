import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedigReanPageRoutingModule } from './redig-rean-routing.module';

import { RedigReanPage } from './redig-rean.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedigReanPageRoutingModule
  ],
  declarations: [RedigReanPage]
})
export class RedigReanPageModule {}
