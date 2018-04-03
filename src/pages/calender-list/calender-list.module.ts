import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalenderListPage } from './calender-list';

@NgModule({
  declarations: [
    CalenderListPage,
  ],
  imports: [
    IonicPageModule.forChild(CalenderListPage),
  ],
})
export class CalenderListPageModule {}
