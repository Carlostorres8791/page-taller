import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {
   servicios = [
    {
      titulo: 'Cambio de Aceite',
      descripcion: 'Asesoramiento para que tu motor use el mejor lubricante de tu elección para un rendimiento óptimo.',
      imagen: './assets/servicio1.jpg'
    },
    {
      titulo: 'Revisión del Sistema Eléctrico',
      descripcion: 'Garantizamos la estabilidad y seguridad del sistema eléctrico para tu moto.',
      imagen: './assets/servicio2.jpg'
    },
    {
      titulo: 'Revisión de Frenos',
      descripcion: 'Revisión del sistema de frenos para que siempre esten eficientes y confiables.',
      imagen: './assets/servicio3.jpg'
    },
    {
      titulo: 'Mantenimiento General',
      descripcion: 'Chequeos completos para que tu moto siempre esté en forma.',
      imagen: './assets/servicio4.jpg'
    },
    {
      titulo: 'Mantenimiento Preventivo',
      descripcion: 'Chequeos completo para poder prevenir futuros daños.',
      imagen: './assets/servicio5.jpg'
    },
    {
      titulo: 'Mantenimiento Correctivo',
      descripcion: 'Chequeos completos para correcion de fallas puntuales previamente diagnosticadas .',
      imagen: './assets/servicio6.jpg'
    }
  ];

}
