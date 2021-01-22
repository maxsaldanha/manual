import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RastreaExamePage } from './rastrea-exame.page';

const routes: Routes = [
  {
    path: '',
    component: RastreaExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RastreaExamePageRoutingModule {}
