import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUserOrgComponent } from './create-user-org.component';

describe('CreateUserOrgComponent', () => {
  let component: CreateUserOrgComponent;
  let fixture: ComponentFixture<CreateUserOrgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUserOrgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUserOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
