import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocMedicoPageRoutingModule } from './loc-medico-routing.module';

import { LocMedicoPage } from './loc-medico.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocMedicoPageRoutingModule
  ],
  declarations: [LocMedicoPage]
})
export class LocMedicoPageModule {}
