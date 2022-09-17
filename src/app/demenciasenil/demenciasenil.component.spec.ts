import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemenciasenilComponent } from './demenciasenil.component';

describe('DemenciasenilComponent', () => {
  let component: DemenciasenilComponent;
  let fixture: ComponentFixture<DemenciasenilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemenciasenilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemenciasenilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
