import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnularExamePageRoutingModule } from './anular-exame-routing.module';

import { AnularExamePage } from './anular-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnularExamePageRoutingModule
  ],
  declarations: [AnularExamePage]
})
export class AnularExamePageModule {}
