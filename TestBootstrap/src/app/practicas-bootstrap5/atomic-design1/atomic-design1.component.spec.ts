import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDesign1Component } from './atomic-design1.component';

describe('AtomicDesign1Component', () => {
  let component: AtomicDesign1Component;
  let fixture: ComponentFixture<AtomicDesign1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicDesign1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicDesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
