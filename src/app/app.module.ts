import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './layout/nav/nav.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MiPerfilComponent } from './pages/mi-perfil/mi-perfil.component';
import { EditarPerfilComponent } from './pages/editar-perfil/editar-perfil.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JwtInterceptor } from './Auth/interceptor';
import { AuthService } from './services/auth.service';
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

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    MiPerfilComponent,
    EditarPerfilComponent,
    VerMascotasComponent,
    VerPerrosComponent,
    VerPerrosAdopcionComponent,
    VerPerrosPerdidosComponent,
    VerPerrosEncontradosComponent,
    CrearRefugioComponent,
    UnirseRefugioComponent,
    VerRefugioComponent,
    CrearPublicacionComponent,
    MisMascotasComponent,
    EventosComponent,
    VerEventosComponent,
    TurnosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
