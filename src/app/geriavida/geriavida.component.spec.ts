import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeriavidaComponent } from './geriavida.component';

describe('GeriavidaComponent', () => {
  let component: GeriavidaComponent;
  let fixture: ComponentFixture<GeriavidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeriavidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeriavidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
