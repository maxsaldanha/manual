import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GuiaNaoRemPage } from './guia-nao-rem.page';

const routes: Routes = [
  {
    path: '',
    component: GuiaNaoRemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuiaNaoRemPageRoutingModule {}
