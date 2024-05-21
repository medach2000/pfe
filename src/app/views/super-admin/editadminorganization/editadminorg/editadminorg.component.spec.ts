import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditadminorgComponent } from './editadminorg.component';

describe('EditadminorgComponent', () => {
  let component: EditadminorgComponent;
  let fixture: ComponentFixture<EditadminorgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditadminorgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditadminorgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
