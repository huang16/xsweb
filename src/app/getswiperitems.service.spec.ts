import { TestBed } from '@angular/core/testing';

import { GetswiperitemsService } from './getswiperitems.service';

describe('GetswiperitemsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetswiperitemsService = TestBed.get(GetswiperitemsService);
    expect(service).toBeTruthy();
  });
});
