
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DashboardPage } from './dashboard';

@NgModule({
  declarations: [
    DashboardPage,
  ],
  imports: [ 
    
    FormsModule,  
    IonicPageModule.forChild(DashboardPage),
  ],
})
export class DashboardPageModule {}
