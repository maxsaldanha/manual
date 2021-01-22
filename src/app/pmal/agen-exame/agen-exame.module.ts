import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgenExamePageRoutingModule } from './agen-exame-routing.module';

import { AgenExamePage } from './agen-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgenExamePageRoutingModule
  ],
  declarations: [AgenExamePage]
})
export class AgenExamePageModule {}
