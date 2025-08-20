import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mto-preventivo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mto-preventivo.component.html',
  styleUrl: './mto-preventivo.component.css'
})
export class MtoPreventivoComponent {
  titulo = 'Mantenimiento Preventivo';
  descripcion = 'Chequeos completos para poder prevenir futuros daños.';
  imagen = './assets/servicio5.jpg';

   detalles: string[] = [
    'Revisión periódica de niveles de aceite y líquidos.',
    'Inspección de frenos, suspensión y transmisión.',
    'Chequeo de batería, sistema eléctrico y luces.',
    'Control de presión y desgaste de neumáticos.',
    'Ajustes menores para evitar fallas mayores,',
    'Como lo es tensión y lubricación de cadena,',
    'Lubricación y revisión de cables.'
  ];

}
