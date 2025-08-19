import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cambio-aceite',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cambio-aceite.component.html',
  styleUrl: './cambio-aceite.component.css'
})
export class CambioAceiteComponent {
  titulo = 'Cambio de Aceite';
  descripcion = 'Asesoramiento para que tu motor use el mejor lubricante de tu elección para un rendimiento óptimo.';
  imagen = './assets/servicio1.jpg';

  detalles: string[] = [
    'Revisión del nivel actual de aceite y  su estado.',
    'Escoger el lubricante adecuado según especificaciones del fabricante.',
    'Verificación e información si se requiere cambio de filtro de aceite.',
    'Asegurar el correcto torque del tapón de drenaje.',
    'Instrucción sobre el kilometraje que se debe de tener para el proximo cambio de aceite'
  ];

}
