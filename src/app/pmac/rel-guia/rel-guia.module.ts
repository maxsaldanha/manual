import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RelGuiaPageRoutingModule } from './rel-guia-routing.module';

import { RelGuiaPage } from './rel-guia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RelGuiaPageRoutingModule
  ],
  declarations: [RelGuiaPage]
})
export class RelGuiaPageModule {}
