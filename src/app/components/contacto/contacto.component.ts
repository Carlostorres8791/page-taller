import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  enviarFormulario(){
    alert('Datos enviados gracias por elegirnos');
  }

}
