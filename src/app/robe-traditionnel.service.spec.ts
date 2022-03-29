import { TestBed } from '@angular/core/testing';

import { RobeTraditionnelService } from './shared/service/robe-traditionnel.service';

describe('RobeTraditionnelService', () => {
  let service: RobeTraditionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RobeTraditionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
