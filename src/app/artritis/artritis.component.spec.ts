import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtritisComponent } from './artritis.component';

describe('ArtritisComponent', () => {
  let component: ArtritisComponent;
  let fixture: ComponentFixture<ArtritisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtritisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtritisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
