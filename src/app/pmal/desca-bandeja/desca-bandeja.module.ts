import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DescaBandejaPageRoutingModule } from './desca-bandeja-routing.module';

import { DescaBandejaPage } from './desca-bandeja.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DescaBandejaPageRoutingModule
  ],
  declarations: [DescaBandejaPage]
})
export class DescaBandejaPageModule {}
