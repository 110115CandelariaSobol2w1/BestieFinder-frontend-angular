import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import { VerMascotasComponent } from './pages/ver-mascotas/ver-mascotas.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path:'home', component: LandingComponent},
  {path:'iniciar-sesion', component: LoginComponent},
  {path:'registro', component: SignupComponent},
  {path:'perfil', component: MiPerfilComponent},
  {path: 'editar-perfil', component: EditarPerfilComponent},
  {path: 'ver-mascotas', component: VerMascotasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
