import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescartarPageRoutingModule } from './descartar-routing.module';

import { DescartarPage } from './descartar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescartarPageRoutingModule
  ],
  declarations: [DescartarPage]
})
export class DescartarPageModule {}
