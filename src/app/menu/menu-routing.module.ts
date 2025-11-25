import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 1. IMPORTAR TODOS LOS COMPONENTES STANDALONE DEL MÓDULO MENU:
import { Citas } from './citas/citas';
import { ConfirmarCita } from './confirmar-cita/confirmar-cita';
import { Contacto } from './contacto/contacto';
import { Contrasena } from './contrasena/contrasena';
import { DetalleRegistro } from './detalle-registro/detalle-registro';
import { Home } from './home/home'; // Para index.html
import { Login } from './login/login';
import { Nosotros } from './nosotros/nosotros';
import { Perfil } from './perfil/perfil';
import { RecetaElectronica } from './receta-electronica/receta-electronica';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { RegistrarUsuario } from './registrar-usuario/registrar-usuario';
import { RegistroGeneral } from './registro-general/registro-general';

// 2. DEFINICIÓN DE RUTAS INTERNAS
const routes: Routes = [
    // Ruta por defecto (para index.html), si alguien navega a /menu
    { path: '', redirectTo: 'home', pathMatch: 'full' },

    // Rutas principales del menú
    { path: 'home', component: Home },
    { path: 'nosotros', component: Nosotros },
    { path: 'contacto', component: Contacto },

    // Rutas de autenticación y registro
    { path: 'login', component: Login },
    { path: 'registro', component: RegistroGeneral }, // mapeado a registro.html
    { path: 'registrar-usuario', component: RegistrarUsuario },
    { path: 'contrasena', component: Contrasena },
    { path: 'recuperar-contrasena', component: RecuperarContrasena },

    // Rutas de citas y perfil
    { path: 'citas', component: Citas },
    { path: 'confirmar-cita', component: ConfirmarCita },
    { path: 'perfil', component: Perfil },
    { path: 'detalle-registro', component: DetalleRegistro },
    { path: 'receta-electronica', component: RecetaElectronica },

    // Ruta comodín para cualquier otra URL no definida dentro de /menu
    { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
