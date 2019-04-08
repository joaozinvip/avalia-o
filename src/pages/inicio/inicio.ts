import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { ClienteService } from '../../service/cliente.service';
import { Cliente } from '../../model/cliente';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  listaDeClientes : Cliente[] = [];//<--
  firestore = firebase.firestore();// Inicio um instancia do banco
  settings = {timestampsInSnapshots: true};//<--

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public menu : MenuController) {

      this.firestore.settings(this.settings); //<--
      
  }

  ionViewDidLoad() {
    this.menu.enable(true);
    this.getList();
  }

  getList() {

    var ref = firebase.firestore().collection("cliente");
    
    ref.get().then(query => {
        query.forEach(doc => {
            let c = new Cliente();
            c.setDados(doc.data());
            this.listaDeClientes.push(c);
        });
        
    });

  }

}
