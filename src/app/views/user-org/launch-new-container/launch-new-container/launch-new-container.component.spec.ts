import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchNewContainerComponent } from './launch-new-container.component';

describe('LaunchNewContainerComponent', () => {
  let component: LaunchNewContainerComponent;
  let fixture: ComponentFixture<LaunchNewContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LaunchNewContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LaunchNewContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
