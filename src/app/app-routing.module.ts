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
  {path: 'ver-refugio', component: VerRefugioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
