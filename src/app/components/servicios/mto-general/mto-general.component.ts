import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mto-general',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mto-general.component.html',
  styleUrl: './mto-general.component.css'
})
export class MtoGeneralComponent {
  titulo = 'Mantenimiento General';
  descripcion = 'Chequeos completos para que tu moto siempre esté en forma.';
  imagen = './assets/servicio4.jpg'; 

  detalles: string[] = [
    'Revisión de motor y niveles de fluidos.',
    'Chequeo del sistema de frenos y suspensión.',
    'Inspección del sistema eléctrico y luces.',
    'Ajuste y lubricación de la transmisión y cadena.',
    'Verificación de llantas y presión de aire.'
  ];
}
