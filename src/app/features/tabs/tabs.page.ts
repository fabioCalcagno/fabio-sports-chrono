import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private navCtrl: NavController) {}

  readonly objectTabs = [
    {
      tabId: 'tabConfigure',
      route: '/tabs/tab1',
      text: 'Configure',
      icon: 'alarm-outline'
    },
    {
      tabId: 'tabConfigure',
      route: '/tabs/tab2',
      text: 'Configure',
      icon: 'ellipse'
    },
    {
      tabId: 'tabConfigure',
      route: '/tabs/tab3',
      text: 'Configure',
      icon: 'square'
    }
  ];

  tabsListener(route: string){
    this.navCtrl.navigateForward(route);
  }
}
