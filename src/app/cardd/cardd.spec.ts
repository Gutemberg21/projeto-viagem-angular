import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cardd } from './cardd';

describe('Cardd', () => {
  let component: Cardd;
  let fixture: ComponentFixture<Cardd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardd],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
