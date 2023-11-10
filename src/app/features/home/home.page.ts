import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title: any;
  constructor(private router: Router) {}

  ionViewDidEnter(): void {
    console.log('did');
  }

  ionViewWillEnter() {
    const title = this.router.getCurrentNavigation()?.extras?.state;
    console.log('will', title);
  }

  setDirection() {
    this.router.navigateByUrl('tabs/configuration');
  }
}
