import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AndCulturaPageRoutingModule } from './and-cultura-routing.module';

import { AndCulturaPage } from './and-cultura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AndCulturaPageRoutingModule
  ],
  declarations: [AndCulturaPage]
})
export class AndCulturaPageModule {}
