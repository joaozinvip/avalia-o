import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-form-contato',
  templateUrl: 'form-contato.html',
})
export class FormContatoPage {
  // 1. declarar e importar
  formGroup: FormGroup;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder//2. Inserir o FormBuilder no construtor, importar
  ) {
    // 3. Iniciar o FormBuilder com os campos do formulário do html
    this.formGroup = this.formBuilder.group({
      nome: [''],
      email: [''],
      assunto: ['Suporte'],
      mensagem: ['']
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormContatoPage');
  }

  enviarMensagem() {
    console.log(this.formGroup.value);
  }

}
