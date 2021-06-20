import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { RegisterUserComponent } from '../app/register-user/register-user.component';

import { UsuarioComponent } from './modules/usuario/usuario.component';
import { RcComponent } from './modules/rc/rc.component';
import { ArchivoComponent } from './pruebas/archivo/archivo.component';
import { TestComponent } from './pruebas/test/test.component';
import { ResultadoComponent } from './pruebas/resultado/resultado.component';
import { RequisitosSeguridadComponent } from './modules/requisitos-seguridad/requisitos-seguridad.component';
import { ConInduccionComponent } from './constancias/con-induccion/con-induccion.component';
import { VideoComponent } from './video/video.component';
import { CovidComponent } from './video/covid/covid.component';
import { ConsCovidComponent } from './constancias/cons-covid/cons-covid.component';
import { ObligacionesComponent } from './visualizacion/obligaciones/obligaciones.component';
import { PlanComponent } from './visualizacion/plan/plan.component'
import { ReglamentoComponent } from './visualizacion/reglamento/reglamento.component'
import { ConsPaseComponent } from './constancias/cons-pase/cons-pase.component'
import { ListausuarioComponent  } from './modulo-listado/listausuario/listausuario.component'
import { ListadodocumentosComponent  } from './listado-documentos/listadodocumentos/listadodocumentos.component'
import { EditartrabajadorComponent } from './modulo-editar/editartrabajador/editartrabajador.component'


const routes: Routes = [
  { path:'registro', component: RegisterUserComponent },
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path:'', component: DefaultComponent, 
  
  children: [
  { path:'usuario', component: UsuarioComponent }, 
  { path:'rc', component: RcComponent },
  { path:'induccion', component: ArchivoComponent }, 
  { path:'resultado', component: ResultadoComponent }, 
  { path:'examen covid', component: TestComponent }, 
  { path:'seguridad', component: RequisitosSeguridadComponent }, 
  { path:'constancia seguridad', component: ConInduccionComponent }, 
  { path:'constancia covid', component: ConsCovidComponent}, 
  { path:'video', component: VideoComponent}, 
  { path:'video covid', component: CovidComponent}, 
  { path:'obligaciones', component: ObligacionesComponent}, 
  { path:'plan', component: PlanComponent}, 
  { path:'reglamento', component: ReglamentoComponent}, 
  { path:'pase', component: ConsPaseComponent}, 
  { path:'listado de usuario', component: ListausuarioComponent}, 
  { path:'listado de documentos',component: ListadodocumentosComponent}, 
  { path:'editar/:id', component: EditartrabajadorComponent}]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
