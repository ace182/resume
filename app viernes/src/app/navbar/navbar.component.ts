import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  prueba: any;
  constructor(private route: ActivatedRoute,
    private router: Router) {

     
    }

  ngOnInit() {
    const tipoUser = JSON.parse(localStorage.getItem('tipoUsuario'));
    this.prueba = tipoUser.tipoUsuario;
    if (tipoUser == null) {
      this.router.navigate(['/login']);
      localStorage.clear();
      alert('Iniciar Sesion');
    }  
    
    
  }
  logout() {
    this.router.navigate(['login']);
  }
}
