import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootAdminDashboardComponent } from './root-admin-dashboard.component';

describe('RootAdminDashboardComponent', () => {
  let component: RootAdminDashboardComponent;
  let fixture: ComponentFixture<RootAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RootAdminDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RootAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
