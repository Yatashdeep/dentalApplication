import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatedetailPage } from '../datedetail/datedetail';

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {
  user_name
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user_name=localStorage.getItem('user_name')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }
  navigatetocal()
  {
    console.log('navigate')
    this.navCtrl.push(DatedetailPage)
  }

}
