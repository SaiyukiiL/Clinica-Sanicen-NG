import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// 1. IMPORTAR COMPONENTES STANDALONE DEL PORTAL
import { PortalRoutingModule } from './portal-routing-module';
import { PortalHome } from './portal-home/portal-home';
import { RegistroMedico } from './registro-medico/registro-medico';
import { Tratamiento } from './tratamiento/tratamiento';

@NgModule({
  // **ELIMINAR declarations: [] porque los componentes son Standalone.**
  // declarations: [],

  imports: [
    CommonModule,
    PortalRoutingModule,

    // 2. IMPORTAR LOS COMPONENTES STANDALONE AQUÍ:
    PortalHome,
    RegistroMedico,
    Tratamiento
  ]
})
export class PortalModule { }
