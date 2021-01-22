import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CaixaPage } from './caixa.page';

const routes: Routes = [
  {
    path: '',
    component: CaixaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CaixaPageRoutingModule {}
