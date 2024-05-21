import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorganizationComponent } from './editorganization.component';

describe('EditorganizationComponent', () => {
  let component: EditorganizationComponent;
  let fixture: ComponentFixture<EditorganizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorganizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorganizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
