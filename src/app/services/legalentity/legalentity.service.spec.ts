import { TestBed, inject } from '@angular/core/testing';

import { LegalentityService } from './legalentity.service';

describe('LegalentityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LegalentityService]
    });
  });

  it('should be created', inject([LegalentityService], (service: LegalentityService) => {
    expect(service).toBeTruthy();
  }));
});
