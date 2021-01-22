import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DigMapaPage } from './dig-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: DigMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DigMapaPageRoutingModule {}
