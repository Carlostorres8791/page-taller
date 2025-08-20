import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sistema-electrico',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './sistema-electrico.component.html',
  styleUrl: './sistema-electrico.component.css'
})
export class SistemaElectricoComponent {
  titulo = 'Revisión del Sistema Eléctrico';
  descripcion = 'Garantizamos la estabilidad y seguridad del sistema eléctrico para tu moto.';
  imagen = './assets/servicio2.jpg';

  detalles: string[] = [
    'Inspección de batería y bornes.',
    'Revisión del sistema de carga (alternador/regulador).',
    'Chequeo de luces, direccionales y tablero.',
    'Prueba de continuidad de cables y conexiones.',
    'Prevención de cortocircuitos y fallas intermitentes.'
  ];
}
