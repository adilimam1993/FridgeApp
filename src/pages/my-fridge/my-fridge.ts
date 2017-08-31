import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Vibration} from "@ionic-native/vibration";
import { ItemDetailsPage} from "../item-details/item-details";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private vibration: Vibration) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyFridgePage');
  }
  itemSelected(){
    //this.vibration.vibrate(3000);
     this.navCtrl.push(ItemDetailsPage);

  }
}
