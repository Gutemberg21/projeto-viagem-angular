import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Toptrend } from './toptrend';

describe('Toptrend', () => {
  let component: Toptrend;
  let fixture: ComponentFixture<Toptrend>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Toptrend],
    }).compileComponents();

    fixture = TestBed.createComponent(Toptrend);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
