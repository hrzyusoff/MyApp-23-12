import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

  }

  showAlert(){
    let name = 'Shah';
    let alert = this.alertCtrl.create({
      title: 'Welcome to Seetru Studio!',
      subTitle: 'We are happy to see you, ' + name,
      buttons: ['Done']
    });
    alert.present();
  }

  pageProfile(){
      this.navCtrl.push('ProfilePage');
  }

}
