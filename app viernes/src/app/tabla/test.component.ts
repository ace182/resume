import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { TablaService } from '../servicios/tabla.service';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { FormularioService } from '../servicios/formulario.service';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-test',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css'],

})

export class TestComponent implements OnDestroy, OnInit {
  alive: boolean;
  
  comuna: any;
  municipios: any;
  barrios: any;
  municipioVoto: any;
  lugarVoto: any;
  profesion: any;
  personas: any;
  sexo: any;
  id: any;
  id2: any;
  id3: any;
  id4: any;
  id5: any;
  id6: any;
  id7: any;
  id8: any;
  id9: any;
  id10: any;
  validacion: any;

  persona = {
    cedula: this.id,
    nombre: "",
    nombre2: "",
    apellido: "",
    apellido2: "",
    telefono: "" + this.id2,
    celular: "" + this.id3,
    celular2: "" + this.id4,
    email: "",
    direccion: "",
    fechaNacimiento: "0000-00-00",
    referido: "",
    funcion: "",
    lider: "",
    observacion: "",
    mesaVotacion: "",
    idMunicipio: this.id5,
    idBarrio: this.id6,
    idProfesion: this.id7,
    idMuniVoto: this.id8,
    idLugarVoto: this.id9,
    idSexo: this.id10};
  
    persons: Array<any>;
    dtOptions: any = {};
    tipoUser: any;
    

  @ViewChild(DataTableDirective)
    datatableElement: DataTableDirective;
    filterBarrio: string;
    filterLugarVotacion: any;
    filterPersonas: string;
    filterComuna: any;
    dtTrigger: Subject<any> = new Subject();
    // dtOptions: DataTables.Settings = {};

   
  constructor(private servicio: FormularioService, private service: TablaService, private router: Router) {

    this.alive = true;

    const tipoUser = JSON.parse(localStorage.getItem('tipoUsuario'));
    if (tipoUser == null || tipoUser.tipoUsuario === 'user') {
      this.router.navigate(['/login']);
      localStorage.clear();
      alert('Iniciar Sesion');
    }

    this.consultaMunicipioVoto();
    this.consultaMunicipio();
    this.consultaPersonas();
  }

  ngOnInit() {
    
    this.consulta();
    this.dtOptions = {
      pageLength: 15,
      responsive: true,
      dom: 'Bfrtip',
      buttons: [
        'print',
        'excel'
      ],
      language: {
        search: 'Búsqueda',
        lengthMenu: 'Cantidad _MENU_ registros por pagina',
        emptyTable: 'No hay datos disponibles',
        info: 'Registro _START_ a _END_ de _TOTAL_ consultados',
        infoEmpty: 'Registro 0 a 0 de 0 consultados',
        paginate: {
          first: 'Primero',
          last: 'Ultimo',
          next: 'Siguiente',
          previous: 'Anterior'
        }
      }
    };
    
    
  }

  ngOnDestroy():void{
    this.alive = false;
    // Do not forget to unsubscribe the event
    $.fn['dataTable'].ext.search.pop();
    this.dtTrigger.unsubscribe();
    return this.ngOnInit();
    
  }
// CODIGO ANDRES
consultaMunicipio() {
  this.servicio.consultarMunicipio().pipe(takeWhile(() => this.alive)).subscribe(data => {
    this.municipios = data;
  });
}

  consultaMunicipioVoto() {
    this.servicio.consultarMunicipioVotacion().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.municipioVoto = data;
    });
  }

  consultaLugarVoto(idMuniVoto) {
    this.servicio.consultarLugarVoto(idMuniVoto ).pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.lugarVoto = data;
    });
  }

  recargarLugarVoto(idMunicipoVoto) {
    return this.consultaLugarVoto(idMunicipoVoto);
  }

  consultaBarrio(idMunicipio) {
    this.servicio.consultarBarrio(idMunicipio).pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.barrios = data;
    });
  }
  recargarBarrio(idMunicipo) {
    return this.consultaBarrio(idMunicipo);
  }

  consultaComuna(idBarrio) {
    this.servicio.consultarComuna(idBarrio).pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.comuna = data["0"].b_comuna;
    });
  }
  recargarComuna(idBarrio) {
    return this.consultaComuna(idBarrio);
  }

  consultaPersonas() {
    this.servicio.consultarPersonas().pipe(takeWhile(() => this.alive)).subscribe(data => {
      this.personas = data;
    });
  }

// FIN CODIGO DE ANDRES

  

  consulta() {
    this.service.getAll().pipe(takeWhile(() => this.alive)).subscribe(persons => {
      this.persons = persons;
      // Calling the DT trigger to manually render the table
      console.log(this.persons);
      this.dtTrigger.next();
      
    });
  }

  
  filterByBarrio(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const barrio = data["13"]; // use data for the id column

      if (barrio == this.filterBarrio.toUpperCase()) {
        console.log(true);
        return true;
      }
      if (this.filterBarrio == '' || this.filterBarrio == null) {
        return this.ngOnDestroy();
      }

      return false;
    });
  }

  filterByLugarVotacion(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const lugarVotacion = data["20"];// use data for the id column
      if (lugarVotacion == this.filterLugarVotacion) {
        console.log(true);
        return true;
      }
      if (this.filterLugarVotacion == '' || this.filterLugarVotacion == null) {
        return this.ngOnDestroy();
      }
      return false;
    });
  }

  filterByReferido(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const referido = data["12"];// use data for the id column
      //console.log(data);
      if (referido == this.filterPersonas.toUpperCase()) {
        console.log(true);
        return true;
      }
      if (this.filterPersonas == '' || this.filterPersonas == null) {
        return this.ngOnDestroy();
      }
      return false;
    });
  }

  filterByComuna(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const barrio = data["14"]; // use data for the id column

      if (barrio == this.filterBarrio) {
        console.log(true);
        return true;
      }
      if (this.filterBarrio == '' || this.filterBarrio == null) {
        return this.ngOnDestroy();
      }

      return false;
    });
  }

  filterByNivel(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
    $.fn['dataTable'].ext.search.push((settings, data, dataIndex) => {
      const referido = data["22"];// use data for the id column
      //console.log(data);
      if (referido == this.filterPersonas) {
        console.log(true);
        return true;
      }
      if (this.filterPersonas == '' || this.filterPersonas == null) {
        return this.ngOnDestroy();
      }
      return false;
    });
  }


 
}

