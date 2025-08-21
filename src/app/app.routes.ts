import { Routes } from '@angular/router';
import { ListaDeCompras } from './feature/lista-de-compras/lista-de-compras';
import { ListaDeDesejos } from './feature/lista-de-desejos/lista-de-desejos';

export const routes: Routes = [
  { path: 'lista-de-compras', component: ListaDeCompras },
  { path: 'lista-de-desejos', component: ListaDeDesejos },
];
