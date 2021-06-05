import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddProcedurePage } from './add-procedure.page';

describe('AddProcedurePage', () => {
  let component: AddProcedurePage;
  let fixture: ComponentFixture<AddProcedurePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProcedurePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddProcedurePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
