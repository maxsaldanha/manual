import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CorreLaudoPageRoutingModule } from './corre-laudo-routing.module';

import { CorreLaudoPage } from './corre-laudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CorreLaudoPageRoutingModule
  ],
  declarations: [CorreLaudoPage]
})
export class CorreLaudoPageModule {}
