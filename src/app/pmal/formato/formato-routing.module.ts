import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormatoPage } from './formato.page';

const routes: Routes = [
  {
    path: '',
    component: FormatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormatoPageRoutingModule {}
