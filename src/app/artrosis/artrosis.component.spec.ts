import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtrosisComponent } from './artrosis.component';

describe('ArtrosisComponent', () => {
  let component: ArtrosisComponent;
  let fixture: ComponentFixture<ArtrosisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtrosisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtrosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
