import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { WebserviceProvider } from '../../providers/webservice/webservice';
/**
 * Generated class for the StaffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-staff',
  templateUrl: 'staff.html',
})
export class StaffPage {
  staffList: Array<any>;

  constructor(public modalCtrl: ModalController, public webservice: WebserviceProvider, public navCtrl: NavController, public navParams: NavParams) {
    // this.staffList = [
    //   {name: "Ahmad Jamal", company: "Maybank", icNo: "902234-09-0393"},
    //   {name: "Siti Aminah", company: "CIMB", icNo: "902234-09-23492"},
    //   {name: "James Wong", company: "RHB", icNo: "234235-09-0393"}
    // ];
  }

  ionViewDidLoad() {
    this.webservice.getStaff().then(response => {
      console.log(response);
      this.staffList = response.person;
    }).catch(err => {
      console.log('Error: ' + JSON.stringify(err));
    })
  }

  pageAdd(){
    let modal = this.modalCtrl.create('AddPage');
    modal.present();

    modal.onDidDismiss(staff => {
      if(staff){
        this.webservice.saveStaff(staff).then(response => {
          if(response.success == 1){
              alert('User data saved successfully');
              this.staffList.push(staff);
          } else {
              alert('Failed to saved user' + response.message);
          }
          
        }).catch(err => {
          console.log('Error: ' + JSON.stringify(err))
        })
      }
    })

  }
}
