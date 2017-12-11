import { Component } from '@angular/core';
import { NavController, NavParams, ItemSliding, AlertController, Events  } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  friends: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController, public af: AngularFireDatabase, public alertCtrl: AlertController) {
      this.friends = af.list('/friends');
  }
  addFriend() {//message box for geting the user updating input 
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
            this.friends.push({name: data.name, phone_number: data.phone_number, address: data.address}); 
          } 
        } 
      ]
    });
    prompt.present(); 
  }
  removeFriend(friend: any) { 
    this.friends.remove(friend.$key);
  }
}
