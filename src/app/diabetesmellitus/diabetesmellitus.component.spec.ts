import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabetesmellitusComponent } from './diabetesmellitus.component';

describe('DiabetesmellitusComponent', () => {
  let component: DiabetesmellitusComponent;
  let fixture: ComponentFixture<DiabetesmellitusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabetesmellitusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabetesmellitusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
