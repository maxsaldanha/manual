import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AltFormMapaPage } from './alt-form-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: AltFormMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AltFormMapaPageRoutingModule {}
