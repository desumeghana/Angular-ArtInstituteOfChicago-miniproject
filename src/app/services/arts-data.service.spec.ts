import { TestBed } from '@angular/core/testing';

import { ArtsDataService } from './arts-data.service';

describe('ArtsDataService', () => {
  let service: ArtsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArtsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
