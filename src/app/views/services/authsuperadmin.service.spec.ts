import { TestBed } from '@angular/core/testing';

import { AuthsuperadminService } from './authsuperadmin.service';

describe('AuthsuperadminService', () => {
  let service: AuthsuperadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthsuperadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
