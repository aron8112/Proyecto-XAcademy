import { TestBed } from '@angular/core/testing';

import { AuthRolesGuard } from './auth-roles.guard';

describe('AuthRolesGuard', () => {
  let guard: AuthRolesGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRolesGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
