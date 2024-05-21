import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRootAdminComponent } from './auth-root-admin.component';

describe('AuthRootAdminComponent', () => {
  let component: AuthRootAdminComponent;
  let fixture: ComponentFixture<AuthRootAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRootAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRootAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
