import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './tabla/test.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
import { RecorridoFormComponent } from './recorrido-form/recorrido-form.component';

const routes: Routes = [
  { path: 'tabla', component: TestComponent },
  { path: 'login', component: LoginComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'tablaErika', component: RecorridoComponent },
  { path: 'recorrido', component: RecorridoFormComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


