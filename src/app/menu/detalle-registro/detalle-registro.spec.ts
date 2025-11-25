import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleRegistro } from './detalle-registro';

describe('DetalleRegistro', () => {
  let component: DetalleRegistro;
  let fixture: ComponentFixture<DetalleRegistro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleRegistro]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleRegistro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
