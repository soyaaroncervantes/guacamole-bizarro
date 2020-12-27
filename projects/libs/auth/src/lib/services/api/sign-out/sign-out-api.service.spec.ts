import { TestBed } from '@angular/core/testing';

import { SignOutApiService } from './sign-out-api.service';

describe('SignOutApiService', () => {
  let service: SignOutApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignOutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
