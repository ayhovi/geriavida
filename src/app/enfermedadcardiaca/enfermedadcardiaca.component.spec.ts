import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnfermedadcardiacaComponent } from './enfermedadcardiaca.component';

describe('EnfermedadcardiacaComponent', () => {
  let component: EnfermedadcardiacaComponent;
  let fixture: ComponentFixture<EnfermedadcardiacaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnfermedadcardiacaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnfermedadcardiacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
