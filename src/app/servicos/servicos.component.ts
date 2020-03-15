import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'app-servicos',
  templateUrl: './servicos.component.html',
  styleUrls: ['./servicos.component.css']
})
export class ServicosComponent implements OnInit {

  cursos: string[] = [];
  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursosService = new CursosService();
    //this.cursosService = cursosService;
  }

  ngOnInit() {
    this.cursos = this.cursosService.getCursos();
  }

}
