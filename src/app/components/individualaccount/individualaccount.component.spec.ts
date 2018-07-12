import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualaccountComponent } from './individualaccount.component';

describe('IndividualaccountComponent', () => {
  let component: IndividualaccountComponent;
  let fixture: ComponentFixture<IndividualaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndividualaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
