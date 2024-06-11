import { Routes } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { FormComponent } from './form/form.component';

export const routes: Routes = [
  {path: 'clientes', component: ClientesComponent},
  {path: 'cliente/form', component: FormComponent},
  {path: '', redirectTo: '/clientes', pathMatch: 'full'}
];
