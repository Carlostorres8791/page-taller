import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [RouterModule, NgStyle],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {
  backgroundUrl = './assets/galeria/fachada2.jpg';

}
