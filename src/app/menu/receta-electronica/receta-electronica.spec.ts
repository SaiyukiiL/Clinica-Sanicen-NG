import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaElectronica } from './receta-electronica';

describe('RecetaElectronica', () => {
  let component: RecetaElectronica;
  let fixture: ComponentFixture<RecetaElectronica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecetaElectronica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecetaElectronica);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
