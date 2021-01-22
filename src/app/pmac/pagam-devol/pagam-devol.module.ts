import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamDevolPageRoutingModule } from './pagam-devol-routing.module';

import { PagamDevolPage } from './pagam-devol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamDevolPageRoutingModule
  ],
  declarations: [PagamDevolPage]
})
export class PagamDevolPageModule {}
