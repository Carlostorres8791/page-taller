import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mto-correctivo',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './mto-correctivo.component.html',
  styleUrl: './mto-correctivo.component.css'
})
export class MtoCorrectivoComponent {
  titulo = 'Mantenimiento Correctivo';
  descripcion = 'Chequeos completos para corrección de fallas puntuales previamente diagnosticadas.';
  imagen = './assets/servicio6.jpg';

  detalles: string[] = [
    'Diagnóstico previo de la falla detectada.',
    'Reemplazo o ajuste de piezas defectuosas.',
    'Verificación del sistema afectado (eléctrico, motor, frenos, etc.).',
    'Pruebas de funcionamiento después de la corrección.',
    'Informe de la reparación realizada y recomendaciones.'
  ];
}
