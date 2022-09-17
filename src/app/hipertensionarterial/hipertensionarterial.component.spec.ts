import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HipertensionarterialComponent } from './hipertensionarterial.component';

describe('HipertensionarterialComponent', () => {
  let component: HipertensionarterialComponent;
  let fixture: ComponentFixture<HipertensionarterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HipertensionarterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HipertensionarterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
