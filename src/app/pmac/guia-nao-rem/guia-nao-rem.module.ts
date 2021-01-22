import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GuiaNaoRemPageRoutingModule } from './guia-nao-rem-routing.module';

import { GuiaNaoRemPage } from './guia-nao-rem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GuiaNaoRemPageRoutingModule
  ],
  declarations: [GuiaNaoRemPage]
})
export class GuiaNaoRemPageModule {}
