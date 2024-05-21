import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminorgComponent } from './adminorg.component';

describe('AdminorgComponent', () => {
  let component: AdminorgComponent;
  let fixture: ComponentFixture<AdminorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
