import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PinedSectionComponent } from './pined-section.component';

describe('PinedSectionComponent', () => {
  let component: PinedSectionComponent;
  let fixture: ComponentFixture<PinedSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PinedSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PinedSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
