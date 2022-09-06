import { TestBed } from '@angular/core/testing';

import { VolleyappsService } from './volleyapps.service';

describe('VolleyappsService', () => {
  let service: VolleyappsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VolleyappsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
