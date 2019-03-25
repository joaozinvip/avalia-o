import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-form-contato',
  templateUrl: 'form-contato.html',
})
export class FormContatoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormContatoPage');
  }

  enviarMensagem(){
    console.log('Mensagem Enviada!');
  }

}
