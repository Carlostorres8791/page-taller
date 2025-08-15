import { Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'contacto', component: ContactoComponent }
];
