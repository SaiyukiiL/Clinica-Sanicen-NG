import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos de funcionalidad que pueden ser necesarios (dejamos de ejemplo)
// import { FormsModule } from '@angular/forms';
// import { ReactiveFormsModule } from '@angular/forms';

// 1. IMPORTAR TODOS LOS COMPONENTES STANDALONE GENERADOS:
import { MenuRoutingModule } from './menu-routing.module';
import { Citas } from './citas/citas';
import { Login } from './login/login';
import { Contacto } from './contacto/contacto';
import { ConfirmarCita } from './confirmar-cita/confirmar-cita';
import { Contrasena } from './contrasena/contrasena';
import { DetalleRegistro } from './detalle-registro/detalle-registro';
import { Home } from './home/home';
import { Nosotros } from './nosotros/nosotros';
import { Perfil } from './perfil/perfil';
import { RecetaElectronica } from './receta-electronica/receta-electronica';
import { RecuperarContrasena } from './recuperar-contrasena/recuperar-contrasena';
import { RegistrarUsuario } from './registrar-usuario/registrar-usuario';
import { RegistroGeneral } from './registro-general/registro-general';


@NgModule({
  // No hay 'declarations' porque los componentes son Standalone.

  imports: [
    CommonModule,
    MenuRoutingModule,

    // Módulos de Angular (si los usas)
    // FormsModule,
    // ReactiveFormsModule,

    // 2. IMPORTAR LOS COMPONENTES STANDALONE AQUÍ:
    Citas,
    Login,
    Contacto,
    ConfirmarCita,
    Contrasena,
    DetalleRegistro,
    Home,
    Nosotros,
    Perfil,
    RecetaElectronica,
    RecuperarContrasena,
    RegistrarUsuario,
    RegistroGeneral
  ]
})
export class MenuModule { }
