import { TestBed } from '@angular/core/testing';

import { SignInFacadeService } from './sign-in-facade.service';

describe('SignInFacadeService', () => {
  let service: SignInFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SignInFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
