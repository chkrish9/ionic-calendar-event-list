import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { Calendar } from '@ionic-native/calendar';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  calenders = [];
  constructor(public navCtrl: NavController, private calender:Calendar, private platform:Platform, private toastCtrl:ToastController) {
      this.platform.ready().then(()=>{
        this.calender.listCalendars().then( data => {
            this.calenders = data;
        });
      });
  }

  addEvent(cal){
    let date = new Date();
    let options = { calendarId :cal.id, calendarName: cal.name, firstReminderMinutes:15 };
    this.calender.createEventInteractivelyWithOptions('New Event','','adding new event',date,date,options).then( ()=>{

    });
  }

  openCalenderDetails(cal){
    this.navCtrl.push('CalenderListPage', { name : cal.name });
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
