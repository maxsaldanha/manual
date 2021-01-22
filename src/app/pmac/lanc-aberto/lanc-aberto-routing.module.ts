import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LancAbertoPage } from './lanc-aberto.page';

const routes: Routes = [
  {
    path: '',
    component: LancAbertoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LancAbertoPageRoutingModule {}
