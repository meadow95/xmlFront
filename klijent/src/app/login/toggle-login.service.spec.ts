import { TestBed, inject } from '@angular/core/testing';

import { ToggleLoginService } from './toggle-login.service';

describe('ToggleLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ToggleLoginService]
    });
  });

  it('should be created', inject([ToggleLoginService], (service: ToggleLoginService) => {
    expect(service).toBeTruthy();
  }));
});
