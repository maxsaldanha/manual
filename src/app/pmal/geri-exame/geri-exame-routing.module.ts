import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeriExamePage } from './geri-exame.page';

const routes: Routes = [
  {
    path: '',
    component: GeriExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeriExamePageRoutingModule {}
