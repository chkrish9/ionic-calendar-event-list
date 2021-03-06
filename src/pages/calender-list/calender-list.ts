import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ToastController } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';

@IonicPage()
@Component({
  selector: 'page-calender-list',
  templateUrl: 'calender-list.html',
})
export class CalenderListPage {
  calName = '';
  events = [];
  constructor(public navCtrl: NavController, public navParams: NavParams ,private calender:Calendar, private platform:Platform,private toastCtrl:ToastController) {
    this.calName = this.navParams.get('name');
    if(this.platform.is('ios')){
      this.calender.findAllEventsInNamedCalendar(this.calName).then( data =>{
        this.events = data;
      });
    }else if (this.platform.is('android')){
      let start = new Date();
      let end = new Date();
      end.setDate(end.getDate() + 31);
      this.calender.listEventsInRange(start,end).then(data => {
        this.events=data;
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalenderListPage');
  }

  parseDate(date){
    return new Date(date).toLocaleString();
  }
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
