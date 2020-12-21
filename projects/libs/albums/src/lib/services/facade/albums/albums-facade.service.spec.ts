import { TestBed } from '@angular/core/testing';

import { AlbumsFacadeService } from './albums-facade.service';

describe('FacadeAlbumsService', () => {
  let service: AlbumsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlbumsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
