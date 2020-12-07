import { TestBed } from '@angular/core/testing';

import { FacadeLogoutService } from './facade-logout.service';

describe('FacadeLogoutService', () => {
  let service: FacadeLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
