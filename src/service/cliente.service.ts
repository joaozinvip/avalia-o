import firebase from "firebase";
import { Cliente } from "../model/cliente";
import { Injectable } from "@angular/core";

@Injectable()
export class ClienteService{

    firestore = firebase.firestore();//<--
    settings = {timestampsInSnapshots: true};//<--
    listaDeClientes : Cliente[] = [];

    constructor(){
        this.firestore.settings(this.settings); //<--
    }

    getList() : Cliente[]{

     

        var ref = this.firestore.collection("cliente");
        
        ref.get().then(query => {
            query.forEach(doc => {
                let c = new Cliente();
                c.setDados(doc.data());
                this.listaDeClientes.push(c);
            });
        });

        return this.listaDeClientes;
      }
}