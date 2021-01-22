import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfVolumePageRoutingModule } from './inf-volume-routing.module';

import { InfVolumePage } from './inf-volume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfVolumePageRoutingModule
  ],
  declarations: [InfVolumePage]
})
export class InfVolumePageModule {}
