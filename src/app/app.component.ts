import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FileItem } from '../models/file.item.model';
import { FILE_LIST } from '../data/file.storage';
import { Programador } from './programador';
import { FormComponent } from "./form/form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {

  lstProgramadores: Programador[] = [];
  progEdit: Programador = new Programador();

  pushProg(p: Programador){
    this.lstProgramadores.push(p);
  }
  eliminarProg(index: number){
    this.lstProgramadores.splice(index,1);
  }
  editar(index: number) {
    this.progEdit = { ...this.lstProgramadores[index]
     }; // Clona el programador para evitar mutaciones inesperadas
  }
  handleFormEmit(updatedProg: Programador) {
    const index = this.lstProgramadores.findIndex(p => p.nombre === updatedProg.nombre && p.apellido === updatedProg.apellido);
    if (index !== -1) {
      this.lstProgramadores[index] = updatedProg;
    } else {
      this.pushProg(updatedProg); // Si el programador no se encuentra, agrega uno nuevo
    }
    this.progEdit = new Programador();
  }
  handleCancel() {
    this.progEdit = new Programador(); // Resetear el objeto progEdit cuando se cancela
  }
  
  


}
