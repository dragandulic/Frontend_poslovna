import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenosComponent } from './prenos.component';

describe('PrenosComponent', () => {
  let component: PrenosComponent;
  let fixture: ComponentFixture<PrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
