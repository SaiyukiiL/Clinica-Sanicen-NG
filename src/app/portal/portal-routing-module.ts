import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. IMPORTAR TODOS LOS COMPONENTES STANDALONE DEL PORTAL
// (Asegúrate de que estas clases y rutas sean correctas)
import { PortalHome } from './portal-home/portal-home';
import { RegistroMedico } from './registro-medico/registro-medico';
import { Tratamiento } from './tratamiento/tratamiento';

// 2. DEFINICIÓN DE RUTAS INTERNAS
const routes: Routes = [
    // La ruta completa será /portal/home
    { path: 'home', component: PortalHome },

    // La ruta completa será /portal/registro-medico
    { path: 'registro-medico', component: RegistroMedico },

    // La ruta completa será /portal/tratamiento
    { path: 'tratamiento', component: Tratamiento },

    // Ruta por defecto: si alguien navega solo a /portal, se redirige a home
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Ruta comodín (opcional):
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule { }
