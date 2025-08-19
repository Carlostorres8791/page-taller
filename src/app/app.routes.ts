import { Routes } from '@angular/router';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { CambioAceiteComponent } from './components/servicios/cambio-aceite/cambio-aceite.component';
import { FrenosComponent } from './components/servicios/frenos/frenos.component';
import { SistemaElectricoComponent } from './components/servicios/sistema-electrico/sistema-electrico.component';
import { MtoGeneralComponent } from './components/servicios/mto-general/mto-general.component';
import { MtoPreventivoComponent } from './components/servicios/mto-preventivo/mto-preventivo.component';
import { MtoCorrectivoComponent } from './components/servicios/mto-correctivo/mto-correctivo.component';

export const routes: Routes = [
    { path: '', component: InicioComponent },
    { path: 'servicios', component: ServiciosComponent },
    { path: 'cambio-aceite', component: CambioAceiteComponent },
    { path: 'sistema-electrico', component: SistemaElectricoComponent },
    { path: 'frenos', component: FrenosComponent },
    { path: 'mto-general', component: MtoGeneralComponent },
    { path: 'mto-preventivo', component: MtoPreventivoComponent },
    { path: 'mto-correctivo', component: MtoCorrectivoComponent },
    { path: 'galeria', component: GaleriaComponent },
    { path: 'contacto', component: ContactoComponent }
];
