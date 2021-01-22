import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndCultConsulPageRoutingModule } from './and-cult-consul-routing.module';

import { AndCultConsulPage } from './and-cult-consul.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndCultConsulPageRoutingModule
  ],
  declarations: [AndCultConsulPage]
})
export class AndCultConsulPageModule {}
