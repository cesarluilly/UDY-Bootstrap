import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomicDesign1PagesComponent } from './atomic-design1-pages.component';

describe('AtomicDesign1PagesComponent', () => {
  let component: AtomicDesign1PagesComponent;
  let fixture: ComponentFixture<AtomicDesign1PagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomicDesign1PagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomicDesign1PagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
