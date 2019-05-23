import { TestBed } from '@angular/core/testing';

import { DemanddetailService } from './demanddetail.service';

describe('DemanddetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemanddetailService = TestBed.get(DemanddetailService);
    expect(service).toBeTruthy();
  });
});
