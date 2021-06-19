import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MobileTreatmentsTableComponent } from './mobile-treatments-table.component';

describe('MobileTreatmentsTableComponent', () => {
  let component: MobileTreatmentsTableComponent;
  let fixture: ComponentFixture<MobileTreatmentsTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobileTreatmentsTableComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MobileTreatmentsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
