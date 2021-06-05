import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TwoColumnLayoutPage } from './two-column-layout.page';

describe('TwoColumnLayoutPage', () => {
  let component: TwoColumnLayoutPage;
  let fixture: ComponentFixture<TwoColumnLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TwoColumnLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
