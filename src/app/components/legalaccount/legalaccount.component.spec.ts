import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalaccountComponent } from './legalaccount.component';

describe('LegalaccountComponent', () => {
  let component: LegalaccountComponent;
  let fixture: ComponentFixture<LegalaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
