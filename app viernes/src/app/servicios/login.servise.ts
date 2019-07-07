import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { timeout } from 'q';
@Injectable({
    providedIn: 'root'
})
export class LoginService {
    public usu: any;
  // public API = 'http://127.0.0.1:80/ServiciosAPP/loginUser/';
  public API = 'http://sede.consentidocorp.org/ServiciosAPP/loginuser/';
    constructor(private http: HttpClient, private router: Router) {
    }
    login(usuario) {
        this.http.post(this.API + 'autenticar', usuario) .subscribe(
         data => {
           return this.guardarTipoUsuario(data);
         },
         error => console.log(error));
       }
       guardarTipoUsuario(data) {
        
        localStorage.setItem('tipoUsuario', JSON.stringify(data));
        const usu = JSON.parse(localStorage.getItem('tipoUsuario'));
         if (usu.tipoUsuario === 'user') {
           this.router.navigate(['formulario']);
         } else if (usu.tipoUsuario === 'root') {
             this.router.navigate(['tabla']);
          } else if (usu.tipoUsuario === 'special') {
              this.router.navigate(['recorrido']);
           } else {
             alert('Usuario o clave no existe');
             this.router.navigate(['login']);
            }
      }
}
