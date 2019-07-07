import { Component} from "@angular/core";
import { Router } from "@angular/router";
import { ErikaFormService } from '../servicios/erikaForm.service';

@Component({
  selector: 'app-recorrido-form',
  templateUrl: './recorrido-form.component.html',
  styleUrls: ['./recorrido-form.component.css']
})
export class RecorridoFormComponent {
  id: any;
  id2: any;

  persona = {
    cedula: ""+this.id,
    nombre: "",
    telefono: ""+this.id2,
    referido: "",
    observacion: ""
  };

  constructor(
    private servicio: ErikaFormService, private router: Router) {
      const tipoUser = JSON.parse(localStorage.getItem('tipoUsuario'));
      if (tipoUser == null || tipoUser.tipoUsuario !='special') {
        this.router.navigate(['/login']);
        localStorage.clear();
        alert('Iniciar Sesion');
      }  
    }

     crearPersona() {
      
      this.servicio.createUser(this.persona);
    }
}