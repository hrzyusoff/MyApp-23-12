import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  user = {
    name: undefined, 
    icNo: undefined, 
    company: undefined, 
    imageURL: undefined
  };

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }

  submit(){
    if(this.user.name && this.user.icNo && this.user.company){
      this.viewCtrl.dismiss(this.user);
    } else {
      alert('Please fill up the form.');
    }
    
  }

}
