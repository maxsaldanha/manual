import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormatoPageRoutingModule } from './formato-routing.module';

import { FormatoPage } from './formato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormatoPageRoutingModule
  ],
  declarations: [FormatoPage]
})
export class FormatoPageModule {}
