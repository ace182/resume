import { Component, OnInit } from "@angular/core";
import { FormularioService } from "../servicios/formulario.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-formulario",
  templateUrl: "./formulario.component.html",
  styleUrls: ["./formulario.component.css"]
})
export class FormularioComponent implements OnInit {
  comuna: any;
  municipios: any;
  barrios: any;
  municipioVoto: any;
  lugarVoto: any;
  profesion: any;
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
  persons: any[] = [];

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
    idSexo: this.id10
  };

  constructor(private servicio: FormularioService, private router: Router) {
    this.consultaMunicipio();
    this.consultaMunicipioVoto();
    this.consultaProfesion();
    this.consultaSexo();
  }

  ngOnInit() {}

  consultaMunicipio() {
    this.servicio.consultarMunicipio().subscribe(data => {
      this.municipios = data;
    });
  }
  consultaBarrio(idMunicipio) {
    this.servicio.consultarBarrio(idMunicipio).subscribe(data => {
      this.barrios = data;
    });
  }
  recargarBarrio(idMunicipo) {
    return this.consultaBarrio(idMunicipo);
  }
  consultaComuna(idBarrio) {
    this.servicio.consultarComuna(idBarrio).subscribe(data => {
      this.comuna = data["0"].b_comuna;
    });
  }
  recargarComuna(idBarrio) {
    return this.consultaComuna(idBarrio);
  }
  consultaMunicipioVoto() {
    this.servicio.consultarMunicipioVotacion().subscribe(data => {
      this.municipioVoto = data;
    });
  }
  consultaLugarVoto(idMuniVoto) {
    this.servicio.consultarLugarVoto(idMuniVoto).subscribe(data => {
      this.lugarVoto = data;
    });
  }
  recargarLugarVoto(idMunicipoVoto) {
    return this.consultaLugarVoto(idMunicipoVoto);
  }

  consultaProfesion() {
    this.servicio.consultarProfesion().subscribe(data => {
      this.profesion = data;
    });
  }
  consultaSexo() {
    this.servicio.consultarSexo().subscribe(data => {
      this.sexo = data;
    });
  }
  crearPersona() {
    this.servicio.createUser(this.persona);
    console.log(this.persona);
    // return this.vaciarForm();
  }

  validarCedula() {
    this.servicio.validarCedula(this.persona.cedula);
    console.log("this.validacion" + this.validacion);
    if (this.validacion) {
      this.persona.cedula = "";
    }
    console.log("this.persona" + this.persona.cedula);
  }
}
