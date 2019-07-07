import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
})
export class ErikaService {
    // public API = 'http://127.0.0.1:80/ServiciosAPP/loginUser/';
    public API = 'http://sede.consentidocorp.org/ServiciosAPP/loginuser/';
    constructor(private http: HttpClient) {
    }
    getAll(): Observable<any> {
        return this.http.get(this.API + 'consultarE');
    }
}