import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FullPageLayoutPage } from './full-page-layout.page';

describe('FullPageLayoutPage', () => {
  let component: FullPageLayoutPage;
  let fixture: ComponentFixture<FullPageLayoutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullPageLayoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FullPageLayoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
