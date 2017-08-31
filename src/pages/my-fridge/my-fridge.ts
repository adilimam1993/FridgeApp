import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MyFridgePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-fridge',
  templateUrl: 'my-fridge.html',
})
export class MyFridgePage {

  items: any = [{name:'Tomatoes'},{name:'Eggs'},{name:'Milk'},{name:'Muffins'}, {name:'Chocolate'}, {name:'Alcohol'},
                {name:'Tobacco'}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFridgePage');
  }
  itemSelected(){
    console.log("Here");
  }
}
