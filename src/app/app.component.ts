import { Component } from '@angular/core';
import { StatusBar } from '@capacitor/status-bar';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.runConfig();
  }

  private runConfig() {
    this.platform.ready().then(async () => {
      if (this.platform.is('hybrid')) {
        await StatusBar.setOverlaysWebView({ overlay: true });
        await StatusBar.show();
      }
    });
  }
}
