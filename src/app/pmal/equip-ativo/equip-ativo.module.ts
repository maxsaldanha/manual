import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EquipAtivoPageRoutingModule } from './equip-ativo-routing.module';

import { EquipAtivoPage } from './equip-ativo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EquipAtivoPageRoutingModule
  ],
  declarations: [EquipAtivoPage]
})
export class EquipAtivoPageModule {}
