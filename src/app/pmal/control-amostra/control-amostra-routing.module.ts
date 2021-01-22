import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlAmostraPage } from './control-amostra.page';

const routes: Routes = [
  {
    path: '',
    component: ControlAmostraPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlAmostraPageRoutingModule {}
