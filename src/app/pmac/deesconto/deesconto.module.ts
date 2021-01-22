import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeescontoPageRoutingModule } from './deesconto-routing.module';

import { DeescontoPage } from './deesconto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeescontoPageRoutingModule
  ],
  declarations: [DeescontoPage]
})
export class DeescontoPageModule {}
