import { TestBed } from '@angular/core/testing';

import { DemnadslistService } from './demnadslist.service';

describe('DemnadslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemnadslistService = TestBed.get(DemnadslistService);
    expect(service).toBeTruthy();
  });
});
