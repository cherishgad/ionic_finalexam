import { Component } from '@angular/core';
import { NavController, ItemSliding, NavParams, AlertController, Events } from 'ionic-angular';
import { MemberListProvider } from '../../providers/member-list/member-list';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  members: Array<any> = [];
  originMembers: Array<any> = [];
  constructor(public navCtrl: NavController, public alertCtrl: AlertController,
    public events: Events, public memberList: MemberListProvider) {
    memberList.membersList$ 
    .subscribe( ( membersList: Array<any> ) => 
    { this.originMembers = membersList; 
    }); 
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
            if(data.name != ''){  
            this.memberList.addMember({title: data.name, component: HomePage, icon: 'person', name: data.name, phone_number: data.phone_number, address: data.address});
            this.events.publish('members:updated', {});
            } 
          }
        } 
      ]
    });
    prompt.present();
  }
  deleteMember(member: any){
    this.memberList.removeMember(member);
    this.events.publish('members:updated', {});
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
