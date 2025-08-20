import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-frenos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './frenos.component.html',
  styleUrl: './frenos.component.css'
})
export class FrenosComponent {
  titulo = 'Revisión de Frenos';
  descripcion = 'Revisión del sistema de frenos para que siempre estén eficientes y confiables.';
  imagen = './assets/servicio3.jpg'; 

  detalles: string[] = [
    'Inspección de pastillas y zapatas de freno.',
    'Revisión de discos o tambores para detectar desgaste.',
    'Chequeo del líquido de frenos y purga si es necesario.',
    'Verificación de mangueras y líneas de freno.',
    'Prueba de presión y respuesta del sistema de frenado.'
  ];

}
