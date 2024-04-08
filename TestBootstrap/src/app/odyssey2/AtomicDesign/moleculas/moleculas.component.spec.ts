import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoleculasComponent } from './moleculas.component';

describe('MoleculasComponent', () => {
  let component: MoleculasComponent;
  let fixture: ComponentFixture<MoleculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoleculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoleculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
