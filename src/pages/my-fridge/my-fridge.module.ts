import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyFridgePage } from './my-fridge';

@NgModule({
  declarations: [
    MyFridgePage,
  ],
  imports: [
    IonicPageModule.forChild(MyFridgePage),
  ],
})
export class MyFridgePageModule {}
