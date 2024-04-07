import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDesign1TemplateComponent } from './atomic-design1-template.component';

describe('AtomicDesign1TemplateComponent', () => {
  let component: AtomicDesign1TemplateComponent;
  let fixture: ComponentFixture<AtomicDesign1TemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicDesign1TemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicDesign1TemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
