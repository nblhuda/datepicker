import { Component } from '@angular/core';

import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  myDate:string;
  myTime:string;
  myDateNTime:string;

  constructor(
    private datePicker: DatePicker
  ) {}

  showDatepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK,
      okText:"Save Date",
      todayText:"Set Today"
    }).then(
      date => {
        this.myDate = date.getDate()+"/"+date.toLocaleString('default', { month: 'long' })+"/"+date.getFullYear();
      },
      err => console.log('Error occurred while getting date: ', err)
    );
  }  


  showTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'time',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
      okText:"Save Time",
      nowText:"Set Now"
    }).then(
      time => {
        this.myTime =  time.getHours()+":"+time.getMinutes();
      },
      err => console.log('Error occurred while getting time: ', err)
    );
  }  


  showDateTimepicker(){
    this.datePicker.show({
      date: new Date(),
      mode: 'datetime',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_TRADITIONAL,
      doneButtonLabel:"Save Date & Time",
      is24Hour:false
    }).then(
      dateTime => {
        this.myDateNTime = dateTime.getDate()+"/"+dateTime.toLocaleString('default', { month: 'long' })+"/"+dateTime.getFullYear()+" "+dateTime.getHours()+":"+dateTime.getMinutes();
      },
      err => console.log('Error occurred while getting dateTime: ', err)
    );
  }  

}
