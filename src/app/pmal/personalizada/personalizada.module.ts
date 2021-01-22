import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PersonalizadaPageRoutingModule } from './personalizada-routing.module';

import { PersonalizadaPage } from './personalizada.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PersonalizadaPageRoutingModule
  ],
  declarations: [PersonalizadaPage]
})
export class PersonalizadaPageModule {}
