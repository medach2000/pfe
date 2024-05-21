import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSuperAdminComponent } from './auth-super-admin.component';

describe('AuthSuperAdminComponent', () => {
  let component: AuthSuperAdminComponent;
  let fixture: ComponentFixture<AuthSuperAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthSuperAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSuperAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
