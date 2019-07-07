import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
    providedIn: 'root'
})
export class ErikaFormService {
 
    // public API = 'http://127.0.0.1:80/ServiciosAPP/registro/';  
    public API = 'http://sede.consentidocorp.org/ServiciosAPP/registro/';
  
 

    constructor(private http: HttpClient, private router: Router) {
    }

    createUser(usuario) {
      console.log(usuario);
        this.http.post(this.API+'crear/', usuario).subscribe(
          
            data => {
              
              console.log(data);
            },
            error => console.log(error));
                }

}
