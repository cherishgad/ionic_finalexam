import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { HomePage } from '../../pages/home/home';
/*
  Generated class for the MemberListProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MemberListProvider {
  membersList: Array<any>;
  membersSubject: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  membersList$: Observable<Array<any>> = this.membersSubject.asObservable();
  constructor() {
    this.membersList = [ 
      { title:'Father', component: HomePage, icon: 'person', name:'Father', phone_number: '010-1234-0000', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 벧엘관'},
      { title:'Mother', component: HomePage, icon: 'person', name:'Mother', phone_number: '010-1234-0001', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 은혜관'},
      { title:'Sister', component: HomePage, icon: 'person', name:'Sister', phone_number: '010-1234-0002', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 창조관'},
      { title:'Brother', component: HomePage, icon: 'person',name:'Brother', phone_number: '010-1234-0003', address: '경북 포항시 북구 흥해읍 한동로 558 한동대학교 비전관'} ]; 
      this.refresh();
    }
    getMember() { 
      return Promise.resolve(this.membersList); 
    }
    removeMember(member:any) { 
      let index = this.membersList.indexOf(member) 
      if (index != -1) { 
        this.membersList.splice(index, 1);
        this.refresh();
      } 
    }
    addMember(member:any) { 
      this.membersList.push(member);
      this.refresh();
    }
    refresh() { 
      this.membersSubject.next(this.membersList); 
    }
  
}
