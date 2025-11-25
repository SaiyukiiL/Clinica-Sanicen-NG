import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmarCita } from './confirmar-cita';

describe('ConfirmarCita', () => {
  let component: ConfirmarCita;
  let fixture: ComponentFixture<ConfirmarCita>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmarCita]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmarCita);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
