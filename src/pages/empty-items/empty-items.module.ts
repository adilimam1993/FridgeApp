import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmptyItemsPage } from './empty-items';

@NgModule({
  declarations: [
    EmptyItemsPage,
  ],
  imports: [
    IonicPageModule.forChild(EmptyItemsPage),
  ],
})
export class EmptyItemsPageModule {}
