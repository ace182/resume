import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../servicios/login.servise';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = {'usuario': '', 'contrasena': ''};
  constructor(private _router: Router, private loginService: LoginService ) {
    localStorage.clear();

   }

  ngOnInit() {

    
  }
  ingresoUsuario() {
   this.loginService.login(this.usuario);
  }
}
