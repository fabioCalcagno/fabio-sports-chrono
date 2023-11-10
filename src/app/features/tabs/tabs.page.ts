import { Component } from '@angular/core';
import { TabsInterface } from '@features/_interfaces/components.interface';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
})
export class TabsPage {
  constructor(private navCtrl: NavController) {}

  readonly objectTabs = [
    {
      route: 'tabs/home',
      text: 'Início',
      icon: 'home-outline',
    },
    {
      route: 'tabs/home',
      text: 'Configure',
      icon: 'alarm-outline',
    },
    {
      route: 'tabs/tab2',
      text: 'em construcao',
      icon: 'ellipse',
    },
    {
      route: 'tabs/tab3',
      text: 'em construcao',
      icon: 'square',
    },
  ] as TabsInterface[];

  manageTab(tab: TabsInterface) {
    this.navCtrl.navigateForward(tab.route, { state: tab });
  }
}
