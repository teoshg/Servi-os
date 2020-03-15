import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicosComponent } from './servicos/servicos.component';
import { CursosService } from './servicos/cursos.service';
import { CriarCursoComponent } from './criar-curso/criar-curso.component';
import { LogService } from './shared/log.service';



@NgModule({
  declarations: [
    AppComponent,
    ServicosComponent,
    CriarCursoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CursosService,
    LogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
