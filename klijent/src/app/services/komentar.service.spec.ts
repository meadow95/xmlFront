import { TestBed, inject } from '@angular/core/testing';

import { KomentarService } from './komentar.service';

describe('KomentarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KomentarService]
    });
  });

  it('should be created', inject([KomentarService], (service: KomentarService) => {
    expect(service).toBeTruthy();
  }));
});
