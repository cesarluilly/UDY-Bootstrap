import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtomosComponent } from './atomos.component';

describe('AtomosComponent', () => {
  let component: AtomosComponent;
  let fixture: ComponentFixture<AtomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtomosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
