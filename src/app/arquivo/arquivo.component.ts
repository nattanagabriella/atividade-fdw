import { Component, OnInit } from '@angular/core';
import { Arquivo } from './arquivo';

@Component({
  selector: 'app-arquivo',
  templateUrl: './arquivo.component.html',
  styleUrls: ['./arquivo.component.css']
})
export class ArquivoComponent implements OnInit {

  //Agenda (array) contendo as informações dos alunos.
  agenda : Array<any>;
  constructor () { 
     this.agenda  =  new Arquivo().agenda; 
  } 
  ngOnInit(): void {
  }

}
