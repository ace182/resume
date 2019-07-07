import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataTablesModule } from 'angular-datatables';
//componentes
import { TestComponent } from './tabla/test.component';
import { LoginComponent } from './login/login.component';
import { FormularioComponent } from './formulario/formulario.component';
import { RecorridoComponent } from './recorrido/recorrido.component';
//servicios
import { TablaService } from './servicios/tabla.service';
import { LoginService } from './servicios/login.servise';
import { FormularioService } from './servicios/formulario.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ErikaFormService } from './servicios/erikaForm.service';
import { ErikaService } from './servicios/erika.service';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { RecorridoFormComponent } from './recorrido-form/recorrido-form.component';
import { validacionTipoUser } from './servicios/validacionTipoUser.service';




@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LoginComponent,
    FormularioComponent,
    NavbarComponent,
    RecorridoComponent,
    RecorridoFormComponent
  ],
  imports: [
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    DataTablesModule,
  ],
  providers: [validacionTipoUser,ErikaFormService, ErikaService, TablaService,LoginService,FormularioService, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
