import { TestBed, inject } from '@angular/core/testing';

import { ZahteviService } from './zahtevi.service';

describe('ZahteviService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZahteviService]
    });
  });

  it('should be created', inject([ZahteviService], (service: ZahteviService) => {
    expect(service).toBeTruthy();
  }));
});
