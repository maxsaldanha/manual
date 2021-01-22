import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RemesGuiaPageRoutingModule } from './remes-guia-routing.module';

import { RemesGuiaPage } from './remes-guia.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RemesGuiaPageRoutingModule
  ],
  declarations: [RemesGuiaPage]
})
export class RemesGuiaPageModule {}
