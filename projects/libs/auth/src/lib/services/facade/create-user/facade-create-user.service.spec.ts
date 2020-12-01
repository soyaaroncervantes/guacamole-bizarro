import { TestBed } from '@angular/core/testing';

import { FacadeCreateUserService } from './facade-create-user.service';

describe('FacadeCreateUserService', () => {
  let service: FacadeCreateUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeCreateUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
