import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HonorCodePage } from '../pages/honor-code/honor-code';
import { MemberListProvider } from '../providers/member-list/member-list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string, name?: any, phone_number?: any, address?: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public memberList: MemberListProvider, public events: Events) {
    this.initializeApp();
    this.getMyMembers();
    events.subscribe('members:updated', (data) => { 
      this.getMyMembers(); 
    });
    // used for an example of ngFor and navigation
    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  getMyMembers(){ 
    this.memberList.membersList$.subscribe( 
      ( membersList: Array<any> ) =>  { 
      this.pages = [
        { title: 'Edit Members', component: HomePage, icon: 'create' },
        { title: 'Friends', component: ListPage, icon: 'people' },
        { title: 'Honor Code', component: HonorCodePage, icon: 'heart' }];
        for (let member of membersList) { 
           this.pages.push(member); 
          } 
        });
  }
  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
