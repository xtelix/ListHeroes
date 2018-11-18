import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BotonesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-botones',
  templateUrl: 'botones.html',
})
export class BotonesPage {

  Heroes:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    console.log(this.navParams);
    this.Heroes = this.navParams.get('p');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BotonesPage');
  }

}
