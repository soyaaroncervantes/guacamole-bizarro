import { TestBed } from '@angular/core/testing';

import { FacadeAlbumsService } from './facade-albums.service';

describe('FacadeAlbumsService', () => {
  let service: FacadeAlbumsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacadeAlbumsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
