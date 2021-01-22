import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DistribuirPageRoutingModule } from './distribuir-routing.module';

import { DistribuirPage } from './distribuir.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DistribuirPageRoutingModule
  ],
  declarations: [DistribuirPage]
})
export class DistribuirPageModule {}
