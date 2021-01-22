import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GerarMapaPage } from './gerar-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: GerarMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GerarMapaPageRoutingModule {}
