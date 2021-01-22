import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlRpsPageRoutingModule } from './control-rps-routing.module';

import { ControlRpsPage } from './control-rps.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlRpsPageRoutingModule
  ],
  declarations: [ControlRpsPage]
})
export class ControlRpsPageModule {}
