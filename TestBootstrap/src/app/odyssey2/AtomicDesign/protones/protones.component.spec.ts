import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtonesComponent } from './protones.component';

describe('ProtonesComponent', () => {
  let component: ProtonesComponent;
  let fixture: ComponentFixture<ProtonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
