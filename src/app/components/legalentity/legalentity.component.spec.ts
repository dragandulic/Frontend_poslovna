import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalentityComponent } from './legalentity.component';

describe('LegalentityComponent', () => {
  let component: LegalentityComponent;
  let fixture: ComponentFixture<LegalentityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegalentityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalentityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
