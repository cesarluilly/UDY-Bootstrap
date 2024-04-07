import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bem2Component } from './bem2.component';

describe('Bem2Component', () => {
  let component: Bem2Component;
  let fixture: ComponentFixture<Bem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
