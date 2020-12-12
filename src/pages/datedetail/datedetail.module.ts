import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DatedetailPage } from './datedetail';
//import { NgCalendarModule  } from 'ionic2-calendar';
@NgModule({
  declarations: [
    DatedetailPage,
  ],
  imports: [
    IonicPageModule.forChild(DatedetailPage),
 //   NgCalendarModule
  ],
})
export class DatedetailPageModule {}
