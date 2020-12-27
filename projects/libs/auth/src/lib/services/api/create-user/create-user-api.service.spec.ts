import { TestBed } from '@angular/core/testing';

import { CreateUserApiService } from './create-user-api.service';

describe('CreateUserApiService', () => {
  let service: CreateUserApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateUserApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
