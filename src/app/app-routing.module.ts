import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { VerMascotasComponent } from './pages/ver-mascotas-adopcion/ver-mascotas.component';
import { VerPerrosComponent } from './pages/ver-perros/ver-perros.component';
import { VerPerrosAdopcionComponent } from './pages/ver-perros-adopcion/ver-perros-adopcion.component';
import { VerPerrosPerdidosComponent } from './pages/ver-perros-perdidos/ver-perros-perdidos.component';
import { VerPerrosEncontradosComponent } from './pages/ver-perros-encontrados/ver-perros-encontrados.component';
import { CrearRefugioComponent } from './pages/crear-refugio/crear-refugio.component';
import { UnirseRefugioComponent } from './pages/unirse-refugio/unirse-refugio.component';
import { VerRefugioComponent } from './pages/ver-refugio/ver-refugio.component';
import { CrearPublicacionComponent } from './pages/crear-publicacion/crear-publicacion.component';
import { MisMascotasComponent } from './pages/mis-mascotas/mis-mascotas.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { VerEventosComponent } from './pages/ver-eventos/ver-eventos.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { VerTurnosComponent } from './pages/ver-turnos/ver-turnos.component';
import { DonarComponent } from './pages/donar/donar.component';
import { VerTurnosRefugiosComponent } from './pages/ver-turnos-refugios/ver-turnos-refugios.component';
import { MiRefugioComponent } from './pages/mi-refugio/mi-refugio.component';
import { SolicitudesComponent } from './pages/solicitudes/solicitudes.component';
import { DonacionesRefugioComponent } from './pages/donaciones-refugio/donaciones-refugio.component';
import { PerfilOwnerMascotaComponent } from './pages/perfil-owner-mascota/perfil-owner-mascota.component';
import { VerMascotasPerdidasComponent } from './pages/ver-mascotas-perdidas/ver-mascotas-perdidas.component';
import { VerMascotasEncontradasComponent } from './pages/ver-mascotas-encontradas/ver-mascotas-encontradas.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: LandingComponent},
  {path:'iniciar-sesion', component: LoginComponent},
  {path:'registro', component: SignupComponent},
  {path:'perfil', component: MiPerfilComponent},
  {path: 'editar-perfil', component: EditarPerfilComponent},
  {path: 'ver-mascotas', component: VerMascotasComponent},
  {path: 'ver-perros', component: VerPerrosComponent},
  {path: 'ver-perros-adopcion', component: VerPerrosAdopcionComponent},
  {path: 'ver-perros-perdidos', component: VerPerrosPerdidosComponent},
  {path: 'ver-perros-encontrados', component: VerPerrosEncontradosComponent},
  {path: 'crear-refugio', component: CrearRefugioComponent},
  {path: 'unirse', component: UnirseRefugioComponent},
  {path: 'ver-refugio/:id', component: VerRefugioComponent},
  {path: 'crear-publicacion', component: CrearPublicacionComponent},
  {path: 'mis-mascotas', component: MisMascotasComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'ver-eventos', component: VerEventosComponent},
  {path: 'turnos', component: TurnosComponent},
  {path: 'mis-turnos', component: VerTurnosComponent},
  {path: 'donar', component: DonarComponent},
  {path: 'turnos-refugio', component: VerTurnosRefugiosComponent},
  {path: 'mi-refugio', component: MiRefugioComponent},
  {path: 'ver-turnos-refugio', component: VerTurnosRefugiosComponent},
  {path: 'solicitudes', component: SolicitudesComponent},
  {path: 'donaciones', component: DonacionesRefugioComponent},
  {path: 'informacion-mascota/:idUsuario', component: PerfilOwnerMascotaComponent},
  {path: 'mascotas-perdidas', component: VerMascotasPerdidasComponent},
  {path: 'mascotas-encontradas', component: VerMascotasEncontradasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
