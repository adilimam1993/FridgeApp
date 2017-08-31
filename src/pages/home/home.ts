import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MyFridgePage } from '../../pages/my-fridge/my-fridge';
import { EmptyItemsPage } from '../../pages/empty-items/empty-items';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tab1: any;
  tab2: any;

  constructor(public navCtrl: NavController) {
     this.tab1=MyFridgePage;
     this.tab2=EmptyItemsPage;
  }

}
