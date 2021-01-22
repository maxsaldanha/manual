import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LancAbertoPageRoutingModule } from './lanc-aberto-routing.module';

import { LancAbertoPage } from './lanc-aberto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LancAbertoPageRoutingModule
  ],
  declarations: [LancAbertoPage]
})
export class LancAbertoPageModule {}
