import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlAmostraPageRoutingModule } from './control-amostra-routing.module';

import { ControlAmostraPage } from './control-amostra.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlAmostraPageRoutingModule
  ],
  declarations: [ControlAmostraPage]
})
export class ControlAmostraPageModule {}
