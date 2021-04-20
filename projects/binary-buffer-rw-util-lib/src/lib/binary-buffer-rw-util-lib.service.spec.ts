import { TestBed } from '@angular/core/testing';

import { BinaryBufferRwUtilLibService } from './binary-buffer-rw-util-lib.service';

describe('BinaryBufferRwUtilLibService', () => {
  let service: BinaryBufferRwUtilLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BinaryBufferRwUtilLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
