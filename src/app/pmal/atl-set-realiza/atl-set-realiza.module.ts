import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AtlSetRealizaPageRoutingModule } from './atl-set-realiza-routing.module';

import { AtlSetRealizaPage } from './atl-set-realiza.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AtlSetRealizaPageRoutingModule
  ],
  declarations: [AtlSetRealizaPage]
})
export class AtlSetRealizaPageModule {}
