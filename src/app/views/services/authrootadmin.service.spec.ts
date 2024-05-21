import { TestBed } from '@angular/core/testing';

import { AuthrootadminService } from './authrootadmin.service';

describe('AuthrootadminService', () => {
  let service: AuthrootadminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthrootadminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
