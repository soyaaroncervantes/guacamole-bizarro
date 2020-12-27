import { TestBed } from '@angular/core/testing';

import { SignOutFacadeService } from './sign-out-facade.service';

describe('SignOutFacadeService', () => {
  let service: SignOutFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignOutFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
