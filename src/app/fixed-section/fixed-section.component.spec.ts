import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixedSectionComponent } from './fixed-section.component';

describe('FixedSectionComponent', () => {
  let component: FixedSectionComponent;
  let fixture: ComponentFixture<FixedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FixedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
