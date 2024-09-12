import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Programador } from '../programador';
import { EmailValidator, FormsModule, NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']

})
export class FormComponent implements OnChanges{
  @Input() progEdit = new Programador();

  @Output() envidadoEmit = new EventEmitter<Programador>();
  @Output() cancelEmit = new EventEmitter<void>();

  prog : Programador = new Programador();

  listHabilidades: string[] = ['.Net','Java','Javascript','AWS'];

  habilidadesSeleccionadas: string = '';
  isEditMode: boolean = false;

  
  sendForm(form: NgForm){
    //TODO:
    if(form.valid){
      this.envidadoEmit.emit(this.prog);
      this.prog = new Programador();
      this.habilidadesSeleccionadas ='';
      this.isEditMode = false; // Resetear el modo de edición
      console.log(this.prog);
    }
  }
  agregarHabilidades(){
    if(!this.prog.habilidades.includes(this.habilidadesSeleccionadas))
      this.prog.habilidades.push(this.habilidadesSeleccionadas);
  }
  eliminarHabilidades(index: number) {
    this.prog.habilidades.splice(index, 1);
  }
  ngOnChanges(): void {
    //TODO: completar con lo visto en clase
    if(this.progEdit){
      this.prog = {...this.progEdit };
      this.habilidadesSeleccionadas = '';
      this.isEditMode = true;
    }
  }
  cancelEdit() {
    this.cancelEmit.emit();
    this.prog = new Programador();
    this.habilidadesSeleccionadas = '';
  }




  }

