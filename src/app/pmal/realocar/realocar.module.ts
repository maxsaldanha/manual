import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RealocarPageRoutingModule } from './realocar-routing.module';

import { RealocarPage } from './realocar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RealocarPageRoutingModule
  ],
  declarations: [RealocarPage]
})
export class RealocarPageModule {}
