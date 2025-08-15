import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {
  imagenes = [
    { src: './assets/galeria/galeria1.jpg', alt: 'Trabajo 1' },
    { src: './assets/galeria/galeria2.jpg', alt: 'Trabajo 2' },
    { src: './assets/galeria/galeria3.jpg', alt: 'Trabajo 3' },
    { src: './assets/galeria/galeria4.jpg', alt: 'Trabajo 4' },
    { src: './assets/galeria/galeria5.jpg', alt: 'Trabajo 5' },
    { src: './assets/galeria/galeria6.jpg', alt: 'Trabajo 6' },
    { src: './assets/galeria/galeria7.jpg', alt: 'Trabajo 7' }
  ];
  // Imagen actualmente seleccionada
  imagenSeleccionada = this.imagenes[0];

  seleccionarImagen(imagen: {src: string, alt: string}) {
    this.imagenSeleccionada = imagen;
  }

}
