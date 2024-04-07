import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bem1Component } from './bem1.component';

describe('Bem1Component', () => {
  let component: Bem1Component;
  let fixture: ComponentFixture<Bem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
