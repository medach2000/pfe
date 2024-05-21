import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAdminOrgComponent } from './create-admin-org.component';

describe('CreateAdminOrgComponent', () => {
  let component: CreateAdminOrgComponent;
  let fixture: ComponentFixture<CreateAdminOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateAdminOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAdminOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
