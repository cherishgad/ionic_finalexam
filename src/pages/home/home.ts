import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams, AlertController, Events } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Array<any> = [];
  originMembers: Array<any> = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public events: Events) {
    this.originMembers = [
      {name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관'},
      {name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관'},
      {name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관'},
      {name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관'}
      ];
    this.members = this.originMembers;
  }
  addMember() { 
    let prompt = this.alertCtrl.create({ 
      title: 'Add a Member', 
      message: "Enter the member's information", 
      inputs: [ 
        { 
          name: 'name', 
          placeholder: 'name' 
        },
        { 
          name: 'phone_number', 
          placeholder: 'phone number' 
        },
        { 
          name: 'address', 
          placeholder: 'address' 
        },
      ],
      buttons: [ 
        { 
          text: 'Cancel', 
          handler: data => { 
            console.log('Cancel clicked'); 
          } 
        }, 
        { 
          text: 'Add', 
          handler: data => {
            this.members.push({name: data.name, phone_number: data.phone_number, address: data.address}); 
          } 
        } 
      ]
    });
    prompt.present();
  }
  deleteMember(member: any){
    let index = this.members.indexOf(member);
    if(index > -1){
      this.members.splice(index, 1);
    }

  }
  getMember(ev) {
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.members = this.originMembers.filter((member) => {
        return (member.name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
    else{
      this.members = this.originMembers;
    }
  }

}
