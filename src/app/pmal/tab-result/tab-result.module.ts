import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabResultPageRoutingModule } from './tab-result-routing.module';

import { TabResultPage } from './tab-result.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabResultPageRoutingModule
  ],
  declarations: [TabResultPage]
})
export class TabResultPageModule {}
