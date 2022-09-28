import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncontinenciaurinariaComponent } from './incontinenciaurinaria.component';

describe('IncontinenciaurinariaComponent', () => {
  let component: IncontinenciaurinariaComponent;
  let fixture: ComponentFixture<IncontinenciaurinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncontinenciaurinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncontinenciaurinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
