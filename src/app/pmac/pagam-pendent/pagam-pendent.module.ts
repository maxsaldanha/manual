import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PagamPendentPageRoutingModule } from './pagam-pendent-routing.module';

import { PagamPendentPage } from './pagam-pendent.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PagamPendentPageRoutingModule
  ],
  declarations: [PagamPendentPage]
})
export class PagamPendentPageModule {}
