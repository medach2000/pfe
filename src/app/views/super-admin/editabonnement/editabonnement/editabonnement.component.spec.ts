import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditabonnementComponent } from './editabonnement.component';

describe('EditabonnementComponent', () => {
  let component: EditabonnementComponent;
  let fixture: ComponentFixture<EditabonnementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditabonnementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditabonnementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
