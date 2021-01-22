import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocPacientePageRoutingModule } from './loc-paciente-routing.module';

import { LocPacientePage } from './loc-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocPacientePageRoutingModule
  ],
  declarations: [LocPacientePage]
})
export class LocPacientePageModule {}
