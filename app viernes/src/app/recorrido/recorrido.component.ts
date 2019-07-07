import { Component, OnInit, OnDestroy } from '@angular/core';
import { TablaService } from '../servicios/tabla.service';
import { Subject, } from 'rxjs';
import { Router } from '@angular/router';
import { ErikaService } from '../servicios/erika.service';

@Component({
  selector: 'app-recorrido',
  templateUrl: './recorrido.component.html',
  styleUrls: ['./recorrido.component.css']
})
export class RecorridoComponent implements OnInit {
  persons: Array<any>;
  dtOptions: any = {};
  tipoUser:any;
  dtTrigger: Subject<any> = new Subject();
  
  constructor(private service: ErikaService, private router: Router ) {

    const tipoUser = JSON.parse(localStorage.getItem('tipoUsuario'));
    if (tipoUser == null || tipoUser.tipoUsuario !='special') {
      this.router.navigate(['/login']);
      localStorage.clear();
      alert('Iniciar Sesion');
    }  
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
  
  consulta() {
   this.service.getAll().subscribe(persons => {
     this.persons = persons;
     // Calling the DT trigger to manually render the table
     console.log(this.persons);
       this.dtTrigger.next();
     });
 }
}
