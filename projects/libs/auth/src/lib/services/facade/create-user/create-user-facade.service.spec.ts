import { TestBed } from '@angular/core/testing';

import { CreateUserFacadeService } from './create-user-facade.service';

describe('CreateUserFacadeService', () => {
  let service: CreateUserFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
