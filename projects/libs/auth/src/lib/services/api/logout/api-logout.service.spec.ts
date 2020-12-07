import { TestBed } from '@angular/core/testing';

import { ApiLogoutService } from './api-logout.service';

describe('ApiLogoutService', () => {
  let service: ApiLogoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiLogoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
