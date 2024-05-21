import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrgDashboardComponent } from './user-org-dashboard.component';

describe('UserOrgDashboardComponent', () => {
  let component: UserOrgDashboardComponent;
  let fixture: ComponentFixture<UserOrgDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrgDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserOrgDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
