import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LibExamePageRoutingModule } from './lib-exame-routing.module';

import { LibExamePage } from './lib-exame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LibExamePageRoutingModule
  ],
  declarations: [LibExamePage]
})
export class LibExamePageModule {}
