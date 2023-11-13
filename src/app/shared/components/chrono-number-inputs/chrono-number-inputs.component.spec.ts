import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChronoNumberInputsComponent } from './chrono-number-inputs.component';

describe('ChronoNumberInputsComponent', () => {
  let component: ChronoNumberInputsComponent;
  let fixture: ComponentFixture<ChronoNumberInputsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ChronoNumberInputsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChronoNumberInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
