import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {
data
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.data=this.navParams.get('data')
    console.log('data',this.data)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
