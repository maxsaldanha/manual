import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlGuiaPageRoutingModule } from './control-guia-routing.module';

import { ControlGuiaPage } from './control-guia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ControlGuiaPageRoutingModule
  ],
  declarations: [ControlGuiaPage]
})
export class ControlGuiaPageModule {}
