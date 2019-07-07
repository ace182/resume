import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { TablaService } from './tabla.service';

@Injectable({
    providedIn: 'root'
})
export class FormularioService {
    public usu: any;
    validacion;
    
    // public API = 'http://127.0.0.1:80/ServiciosAPP/registro/';  
    public API = 'http://sede.consentidocorp.org/ServiciosAPP/registro/';
  
    
    //   persons: Array<any>;

    constructor(private http: HttpClient, private router: Router,private tablaService: TablaService) {
        // this.consultaCedula();
    }

    consultarBarrio(idMunicipio): Observable<any> {
        return this.http.get(this.API + 'consultarBarrio/' + idMunicipio);
    }
    consultarComuna (idBarrio): Observable<any> {
        return this.http.get(this.API + 'consultarComuna/' + idBarrio);
    }
    consultarMunicipio(): Observable<any> {
        return this.http.get(this.API + 'consultarMunicipio');
    }
    consultarMunicipioVotacion(): Observable<any> {
        return this.http.get(this.API + 'consultarMinicipioVotacion');
    }
    consultarLugarVoto(idMunicipioVotacion): Observable<any> {
        return this.http.get(this.API + 'consultarLugarVotacion/' + idMunicipioVotacion);
    }
    consultarProfesion(): Observable<any> {
        return this.http.get(this.API + 'consultarProfesion');
    }
    consultarSexo(): Observable<any> {
        return this.http.get(this.API + 'cSexo');
    }

    consultarPersonas(): Observable<any> {
        return this.http.get(this.API + 'cPersonas');
    }

    validarCedula(aux): any{
       if(aux != null){       
            this.http.get(this.API + 'validarCedula/' + aux).subscribe(data => {
                this.validacion= data[0]; 
                if (aux == this.validacion){
               
                    swal({
                            title: 'Cedula Existente',
                            text: 'Esta cedula ya esta registrada en la base de datos',
                            type: 'error',
                            confirmButtonText: 'Cerrar'
                          })
                    return true;
                }else {
                    return  false;
                }
            });
        }   
    }
    
    // consultaCedula() {
    //     this.tablaService.getAll().subscribe(persons => {
    //       this.persons = persons;
    //       });
    //   }

    
    createUser(usuario) {
        // console.log(usuario);
        this.http.post(this.API + 'crearusuario/', usuario).subscribe(
            data => {
              console.log(data);

            },
            error => console.log(error));
                }
}
