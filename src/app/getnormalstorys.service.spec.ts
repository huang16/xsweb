import { TestBed } from '@angular/core/testing';

import { GetnormalstorysService } from './getnormalstorys.service';

describe('GetnormalstorysService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetnormalstorysService = TestBed.get(GetnormalstorysService);
    expect(service).toBeTruthy();
  });
});
