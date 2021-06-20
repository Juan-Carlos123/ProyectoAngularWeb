import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { RegisterUserComponent } from './register-user/register-user.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './modules/usuario/usuario.component';
import { RcComponent } from './modules/rc/rc.component';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { ArchivoComponent } from './pruebas/archivo/archivo.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDatepickerModule} from '@angular/material/datepicker';    

import { MatProgressBarModule } from '@angular/material/progress-bar';
import { BackgroundDirective } from './background.directive';
import { RequisitosSeguridadComponent } from './modules/requisitos-seguridad/requisitos-seguridad.component';
import { ConInduccionComponent } from './constancias/con-induccion/con-induccion.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatExpansionModule } from '@angular/material/expansion';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { VideoComponent } from './video/video.component';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { CovidComponent } from './video/covid/covid.component';
import { ConsCovidComponent } from './constancias/cons-covid/cons-covid.component';
import { ObligacionesComponent } from './visualizacion/obligaciones/obligaciones.component';
import { ReglamentoComponent } from './visualizacion/reglamento/reglamento.component';
import { PlanComponent } from './visualizacion/plan/plan.component';
import { ConsPaseComponent } from './constancias/cons-pase/cons-pase.component';
import { ListausuarioComponent } from './modulo-listado/listausuario/listausuario.component';
import { EditartrabajadorComponent } from './modulo-editar/editartrabajador/editartrabajador.component';
import { ListadodocumentosComponent } from './listado-documentos/listadodocumentos/listadodocumentos.component';
import { BackDirective } from './back.directive';
import { TestComponent } from './pruebas/test/test.component';
import { ResultadoComponent } from './pruebas/resultado/resultado.component'

 


@NgModule({
  declarations: [
    AppComponent,
    RegisterUserComponent,
    UsuarioComponent,
    RcComponent,
    ArchivoComponent,
    BackgroundDirective,
    RequisitosSeguridadComponent,
    ConInduccionComponent,
    VideoComponent,
    CovidComponent,
    ConsCovidComponent,
    ObligacionesComponent,
    ReglamentoComponent,
    PlanComponent,
    ConsPaseComponent,
    ListausuarioComponent,
    EditartrabajadorComponent,
    ListadodocumentosComponent,
    BackDirective,
    TestComponent,
    ResultadoComponent,
  

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MaterialFileInputModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatDatepickerModule,
    MatSidenavModule,
    MatExpansionModule,
    HttpClientModule,
    YouTubePlayerModule
    
    
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
