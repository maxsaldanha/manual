import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LibExamePage } from './lib-exame.page';

const routes: Routes = [
  {
    path: '',
    component: LibExamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LibExamePageRoutingModule {}
