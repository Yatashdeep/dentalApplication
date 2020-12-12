
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import{DashboardPage}from'../pages/dashboard/dashboard';
import{DatedetailPage}from'../pages/datedetail/datedetail'
import { SecurityProvider } from '../providers/security/security';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{ HttpModule}from'@angular/http'
import{AnimateItemSlidingDirective}from'../directives/animate-item-sliding/animate-item-sliding'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{StatsPage}from'../pages/stats/stats'
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardPage,
    DatedetailPage,
    StatsPage,
    AnimateItemSlidingDirective
  ],
  imports: [ 
    HttpClientModule,
    HttpModule,
    FormsModule,  
    BrowserModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    DashboardPage,
    DatedetailPage,
    StatsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SecurityProvider
  ]
})
export class AppModule {}
