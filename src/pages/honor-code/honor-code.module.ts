import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HonorCodePage } from './honor-code';

@NgModule({
  declarations: [
    HonorCodePage,
  ],
  imports: [
    IonicPageModule.forChild(HonorCodePage),
  ],
})
export class HonorCodePageModule {}
