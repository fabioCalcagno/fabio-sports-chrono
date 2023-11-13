import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chrono-number-inputs',
  templateUrl: './chrono-number-inputs.component.html',
  styleUrls: ['./chrono-number-inputs.component.scss'],
})
export class ChronoNumberInputsComponent implements OnInit {
  public participantes = 1;
  readonly max = 6;
  readonly min = 1;
  public numMax = false;
  public numMin = false;
  public msgError = '';
  public showMsg = false;

  constructor() {}

  ngOnInit() {
    this.verificaQntdParticipantes();
  }

  add() {
    if (this.participantes < this.max) {
      this.participantes++;
    }
    this.verificaQntdParticipantes();
  }

  remove() {
    if (this.participantes > this.min) {
      this.participantes--;
    }
    this.verificaQntdParticipantes();
  }

  verificaQntdParticipantes() {
    this.numMax = this.participantes === this.max;
    this.numMin = this.participantes === this.min;
    if (this.numMax) {
      this.showMsg = true;
      setTimeout(() => {
        this.showMsg = false;
      }, 4000);
    }
  }
}
