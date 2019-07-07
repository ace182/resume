import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class validacionTipoUser {
    constructor(private http: HttpClient) {
    }
    negarAccesoUser()
    {
        
    }
}
