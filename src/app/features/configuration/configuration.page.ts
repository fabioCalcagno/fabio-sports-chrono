import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.page.html',
  styleUrls: ['./configuration.page.scss'],
})
export class ConfigurationPage implements OnInit {
  public lido_Ok = false;
  public fadeOut = false;
  tempoMininoLeituraAtingido = false;

  ngOnInit(): void {
    setTimeout(() => {
      this.tempoMininoLeituraAtingido = true;
    }, 4000);
  }
  aceiteFn() {
    this.fadeOut = true;
    setTimeout(() => {
      this.lido_Ok = true;
      //salvar no storage que o ok foi dado
    }, 2000);
  }
}
