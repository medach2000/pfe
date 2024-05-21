import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthUserOrgComponent } from './auth-user-org.component';

describe('AuthUserOrgComponent', () => {
  let component: AuthUserOrgComponent;
  let fixture: ComponentFixture<AuthUserOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthUserOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthUserOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
