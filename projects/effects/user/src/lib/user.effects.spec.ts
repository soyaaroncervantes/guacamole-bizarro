import { TestBed } from '@angular/core/testing';

import { UserEffects } from './user.effects';

describe('User.EffectsService', () => {
  let service: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserEffects);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
