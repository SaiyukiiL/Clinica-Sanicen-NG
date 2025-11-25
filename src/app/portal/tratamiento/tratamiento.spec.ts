import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tratamiento } from './tratamiento';

describe('Tratamiento', () => {
  let component: Tratamiento;
  let fixture: ComponentFixture<Tratamiento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tratamiento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tratamiento);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
