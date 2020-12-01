import { TestBed } from '@angular/core/testing';

import { ApiCreateUserService } from './api-create-user.service';

describe('ApiCreateUserService', () => {
  let service: ApiCreateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCreateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
