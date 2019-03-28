import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Cliente } from "../model/cliente";

@Injectable()
export class ClienteService{
    
    constructor(private http : HttpClient){
    }

    listaDeFilmes() : Observable<Cliente[]> {
        return this.http.get<Cliente[]>('http://www.mocky.io/v2/5c9c0f183600004b49d96ef8');
    }

}