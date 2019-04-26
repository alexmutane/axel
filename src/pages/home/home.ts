import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  mostrarCategorias: boolean;
  mostrarSubcategorias: boolean;

  subcategorias = {
    apontamentos: false,
    ideias: false,
    outros: false
  }

  constructor(
    public navCtrl: NavController
  ) {
    this.mostrarCategorias = true;
  }

  abrirSubcategorias(categoria){
    this.mostrarCategorias = false;
    this.mostrarSubcategorias = true;

    switch(categoria){
      case 'apontamentos':  { 
        this.subcategorias.apontamentos = true;
        this.subcategorias.ideias = false; 
        this.subcategorias.outros = false;
        break;
      }
      case 'ideias':  { 
        this.subcategorias.apontamentos = false;
        this.subcategorias.ideias = true; 
        this.subcategorias.outros = false;
        break; 
      }
      case 'outros':  { 
        this.subcategorias.apontamentos = false;
        this.subcategorias.ideias = false; 
        this.subcategorias.outros = true;
        break; 
      }
      default: this.subcategorias.apontamentos = true; 
    }
  }

  listarCategorias(){
    this.mostrarCategorias = true;
    this.mostrarSubcategorias = false;
  }

}
