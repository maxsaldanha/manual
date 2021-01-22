import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaudoCorrigidoPage } from './laudo-corrigido.page';

const routes: Routes = [
  {
    path: '',
    component: LaudoCorrigidoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaudoCorrigidoPageRoutingModule {}
