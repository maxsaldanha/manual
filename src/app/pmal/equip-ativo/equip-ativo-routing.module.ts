import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EquipAtivoPage } from './equip-ativo.page';

const routes: Routes = [
  {
    path: '',
    component: EquipAtivoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EquipAtivoPageRoutingModule {}
