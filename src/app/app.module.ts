import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HonorCodePage } from '../pages/honor-code/honor-code';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FriendListProvider } from '../providers/friend-list/friend-list';
import { MemberListProvider } from '../providers/member-list/member-list';
export const firebaseConfig = { 
  apiKey: "AIzaSyDEE6ITus9CP-ysVOli6ZEVdToJzrFlaBI",
  authDomain: "finalexam-2b76c.firebaseapp.com",
  databaseURL: "https://finalexam-2b76c.firebaseio.com",
  projectId: "finalexam-2b76c",
  storageBucket: "finalexam-2b76c.appspot.com",
  messagingSenderId: "749857454953"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HonorCodePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HonorCodePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FriendListProvider,
    MemberListProvider
  ]
})
export class AppModule {}
