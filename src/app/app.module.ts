import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MyFridgePage } from "../pages/my-fridge/my-fridge";
import { EmptyItemsPage} from "../pages/empty-items/empty-items";
import { Vibration } from '@ionic-native/vibration';
import {ItemDetailsPage} from "../pages/item-details/item-details";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MyFridgePage,
    EmptyItemsPage,
    ItemDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MyFridgePage,
    EmptyItemsPage,
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Vibration
  ]
})
export class AppModule {}
