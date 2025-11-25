import { Routes } from '@angular/router';

export const routes: Routes = [
  // ... otras rutas

  // CONFIGURACIÓN DE CARGA PEREZOSA PARA EL MÓDULO MENU
  {
    path: 'menu',
    // La ruta RELATIVA correcta: ./ para indicar que la búsqueda comienza desde la misma carpeta (app)
    loadChildren: () => import('./menu/menu-module').then(m => m.MenuModule)
  },

  // CONFIGURACIÓN DE CARGA PEREZOSA PARA EL MÓDULO PORTAL
  {
    path: 'portal',
    loadChildren: () => import('./portal/portal-module').then(m => m.PortalModule)
  }
];
