import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocPacientePage } from './loc-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: LocPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocPacientePageRoutingModule {}
