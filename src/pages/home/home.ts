import { BotonesPage } from './../botones/botones';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  title = "Tour of Heroes"
  heroes =["windstorm","Batman","Bombasto","Magneta"];
  myHero = this.heroes[0];

  constructor(public navCtrl: NavController) {

  
  }

  botones(p:any){
    console.log(p);
    this.navCtrl.push(BotonesPage,{p}); 
  }
}
